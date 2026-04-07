using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class LoginRepo : ILoginRepo
    {
        public string LogIn([FromBody] LoginParameters parameters)
        {
            throw new NotImplementedException();
        }
    }
}
