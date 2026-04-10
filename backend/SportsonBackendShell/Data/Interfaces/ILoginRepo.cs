using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface ILoginRepo
    {
        Task<LoginResponse> LogIn(LoginParameters parameters);
    }
}
