using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface ILoginService
    {
        Task<LogoutResponse> Logout(string token);
        Task<LoginResponse?> LogIn(LoginParameters parameters);
        Task SaveRefreshTokenAsync(string tokenHash, string userId, DateTime expiresAt);
        Task<RefreshToken?> GetRefreshTokenByHashAsync(string tokenHash);
        Task RevokeRefreshTokenAsync(string tokenHash);
    }
}
