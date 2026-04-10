using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<IActionResult> LogIn([FromBody] LoginParameters parameters)
        {
            var response = await _loginService.LogIn(parameters);
            

            //var cookie = new CookieOptions()


            return Ok(response.Token);
        }
    }
}
