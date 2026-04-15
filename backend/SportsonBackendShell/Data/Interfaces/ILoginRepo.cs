using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface ILoginRepo
    {
        Task<LoginResponse?> LogIn(LoginParameters parameters);
        Task SaveRefreshTokenAsync(string tokenHash, string userId, DateTime expiresAt);
        Task<RefreshToken?> GetRefreshTokenByHashAsync(string tokenHash);
        Task RevokeRefreshTokenAsync(string tokenHash);
    }
}
