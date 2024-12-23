using api.Models.Auth;

namespace api.Services
{
    public interface IAuthenticationService
    {
        Task<Authentication> Authenticate(string email, string password);
        Task<User2FA> GenerateTwoFactorAuthentication(string email, string password);
        Task<bool> ValidateTwoFactorAuthentication(LoginModel userInfo);
        Task<bool> RegisterUser(string email, string password);


    }
}