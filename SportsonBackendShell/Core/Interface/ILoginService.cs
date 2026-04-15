using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface ILoginService
    {
        Task<(bool Success, string Token, string Error)> LogIn(LoginParameters parameters);
    }
}
