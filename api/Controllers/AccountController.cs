using api.Services;
using System.Text;
using api.Models.Auth;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthenticationService _authentication;

        public AccountController(IConfiguration configuration, IAuthenticationService authentication)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _authentication = authentication ?? throw new ArgumentNullException(nameof(authentication));
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<UserToken>> CreateUser([FromBody] RegisterModel model)
        {
            if (model.Password != model.ConfirmPassword)
            {
                ModelState.AddModelError("ConfirmPassword", "As senhas não conferem");
                return BadRequest(ModelState);

            }

            var result = await _authentication.RegisterUser(model.Email, model.Password);

            if (result)
            {
                return Ok($"Usuário {model.Email} criado com sucesso");
            }
            else
            {
                ModelState.AddModelError("CreateUser", "Registro inválido");
                return BadRequest(ModelState);

            }

        }


        [HttpPost("LoginUser")]
        public async Task<ActionResult<Authentication>> Login([FromBody] LoginModel userInfo)
        {
            var result = await _authentication.Authenticate(userInfo.Email, userInfo.Password);
            if (result.Success)
            {

                return result;
            }

            return StatusCode(500, "Email ou Senha incorretos");


        }

        [HttpPost("GenerateTwoFactorAuthentication")]
        public async Task<ActionResult<User2FA>> GenerateTwoFactorAuthentication([FromBody] TwoFactorAuthentication userInfo)
        {
            var result = await _authentication.GenerateTwoFactorAuthentication(userInfo.Email, userInfo.Password);
            return result;

        }

        [HttpPost("ValidateTwoFactorAuthentication")]
        public async Task<ActionResult<UserToken>> ValidateTwoFactorAuthentication([FromBody] LoginModel userInfo)
        {
            bool isValidOtpCode = await _authentication.ValidateTwoFactorAuthentication(userInfo);

            if (isValidOtpCode)
            {

                var result = await _authentication.Authenticate(userInfo.Email, userInfo.Password);

                if (result.Success)
                {
                    return GenerateToken(userInfo);
                }
                else
                {
                    ModelState.AddModelError("LoginUser", "Login inválido");
                    return BadRequest(ModelState);
                }

            }
            else
            {
                return Unauthorized("Erro Code OTP");
            }

        }


        private ActionResult<UserToken> GenerateToken(LoginModel userInfo)
        {
            var claims = new[] {
               new Claim("email", userInfo.Email),
               new Claim("meuToken", "token do wesley"),
               new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]));

            //Assinatura Digital
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddMinutes(20);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                claims: claims,
                expires: expiration,
                signingCredentials: creds
            );

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };
        }
    }
}