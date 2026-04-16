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
        private readonly IJwtService _jwtService;

        public LoginController(ILoginService loginService, IJwtService jwtService)
        {
            _loginService = loginService;
            _jwtService = jwtService;
        }

        [HttpPost]
        public async Task<IActionResult> LogIn([FromBody] LoginParameters parameters)
        {
            var response = await _loginService.LogIn(parameters);
            if (response.Token != null)
            {
                var jwt = _jwtService.GenerateToken(response.Token);
                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddHours(12)
                });
                return Ok();
            }
            else
            {
                return StatusCode(response.Code, response.Message);
            }
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            var jwt = Request.Cookies["jwt"];

            if (string.IsNullOrEmpty(jwt)) return Unauthorized("No Token Provided");

            var token = _jwtService.ExtractToken(jwt);
            var response = await _loginService.Logout(token);

            Response.Cookies.Delete("jwt");

            if (response.Code == 200) return Ok();
            else return StatusCode(response.Code, response);
        }
    }
}
