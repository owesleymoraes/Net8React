using api.Models.Auth;
using Microsoft.AspNetCore.Identity;
using OtpNet;
using QRCoder;

namespace api.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;


        public AuthenticationService(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;

        }

        public async Task<Authentication> Authenticate(string email, string password)
        {
            SignInResult result = await _signInManager.PasswordSignInAsync(email, password, false, lockoutOnFailure: false);
            var user = await _userManager.FindByEmailAsync(email);

            // Verificar se o usuário já tem uma chave secreta de autenticador
            var key = await _userManager.GetAuthenticatorKeyAsync(user);

            if (string.IsNullOrEmpty(key) && result.Succeeded)
            {

                return Authentication.Create(result.Succeeded, string.IsNullOrEmpty(key));

            }

            return Authentication.Create(result.Succeeded, false); ;

        }

        public async Task<User2FA> GenerateTwoFactorAuthentication(string email, string password)
        {
            // Buscar o usuário pelo e-mail
            var user = await _userManager.FindByEmailAsync(email);

            // Buscar o usuário pelo e-mail
            if (!await _userManager.CheckPasswordAsync(user!, password))
            {
                return User2FA.Create("", "");
            }

            // Verifica se o usuário está nulo
            if (user == null)
            {
                return User2FA.Create("", "");
            }


            // Cria a senha inicial na tabela userTokens
            if (user != null)
            {
                // Verificar se o usuário já tem uma chave secreta de autenticador
                var key = await _userManager.GetAuthenticatorKeyAsync(user);

                // Se não houver chave, gerar uma nova
                if (string.IsNullOrEmpty(key))
                {
                    await _userManager.ResetAuthenticatorKeyAsync(user);
                    key = await _userManager.GetAuthenticatorKeyAsync(user);
                }

                string issuer = "API-WESLEY";
                var qrCodeUri = GenerateQRCodeUri(issuer, email, key!);
                var qrCodeImage = GenerateQRCode(qrCodeUri);

                var qrCode = new User2FA
                {
                    QRCodeImage = qrCodeImage,
                    SecreteKey = key
                };


                return qrCode;

            }

            return User2FA.Create("", "");
        }

        private string GenerateQRCodeUri(string issuer, string email, string secretKey)
        {
            //Criar o URI para o QR Code (usando a chave secreta)
            return $"otpauth://totp/{issuer}:{email}?secret={secretKey}&issuer={issuer}";

        }

        private string GenerateQRCode(string uri)
        {
            using (var qrGenerator = new QRCodeGenerator())
            using (var qrCodeData = qrGenerator.CreateQrCode(uri, QRCodeGenerator.ECCLevel.Q))
            using (var qrCode = new PngByteQRCode(qrCodeData))
            {
                var qrCodeImage = qrCode.GetGraphic(20);

                return Convert.ToBase64String(qrCodeImage);
            }

        }

        public async Task<bool> ValidateTwoFactorAuthentication(LoginModel userInfo)
        {
            // Buscar o usuário pelo e-mail
            var user = await _userManager.FindByEmailAsync(userInfo.Email);

            // Verificar se o usuário já tem uma chave secreta de autenticador

            var key = await _userManager.GetAuthenticatorKeyAsync(user);

            var topt = new Totp(Base32Encoding.ToBytes(key));
            return topt.VerifyTotp(userInfo.OtpCode, out _);

        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            IdentityUser appUser = new IdentityUser
            {
                UserName = email,
                Email = email,
                PasswordHash = password

            };

            var result = await _userManager.CreateAsync(appUser, password);

            if (result.Succeeded)
            {
                var user = await _userManager.FindByEmailAsync(email);
                await _signInManager.SignInAsync(appUser, isPersistent: false);
                await _userManager.SetTwoFactorEnabledAsync(user!, true);

            }

            return result.Succeeded;

        }
    }
}

