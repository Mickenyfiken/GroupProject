using Microsoft.AspNetCore.Mvc;
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

        public IActionResult LogIn([FromBody] LoginParameters parameters)
        {
            var respons = _loginRepo.LogIn(parameters);
            

            return 
        }
    }
}
