using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepo _loginRepo;

        public LoginService(ILoginRepo loginRepo)
        {
            _loginRepo = loginRepo;
        }
        public async Task<LoginResponse?> LogIn(LoginParameters parameters)
        {
            return await _loginRepo.LogIn(parameters);
        }

        public async Task<RefreshToken?> GetRefreshTokenByHashAsync(string tokenHash)
        {
            return await _loginRepo.GetRefreshTokenByHashAsync(tokenHash);
        }


        public async Task RevokeRefreshTokenAsync(string tokenHash)
        {
            await _loginRepo.RevokeRefreshTokenAsync(tokenHash);
        }

        public async Task SaveRefreshTokenAsync(string tokenHash, string userId, DateTime expiresAt)
        {
            await _loginRepo.SaveRefreshTokenAsync(tokenHash, userId, expiresAt);
        }

        public async Task<LogoutResponse> Logout(string token)
        {
            return await _loginRepo.Logout(token);
        }
    }
}
