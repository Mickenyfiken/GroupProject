using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface ILoginService
    {
        Task<LoginSucess> LogIn(LoginParameters parameters);
    }
}
