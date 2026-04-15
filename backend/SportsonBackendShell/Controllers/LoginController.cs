using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using System.Security.Cryptography;
using System.Text;

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
                string refreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));

                var tokenHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(refreshToken)));

                await _loginService.SaveRefreshTokenAsync(tokenHash, response.Token, DateTime.UtcNow.AddDays(5));
                //await _tokenStore.SaveAsync(tokenHash, userId, DateTime.UtcNow.AddDays(5));

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddMinutes(5)
                });
                Response.Cookies.Append("refresh_token", refreshToken, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddDays(5)
                });

                return Ok();
            }
            else
            {
                return StatusCode(response.Code, response.Message);
            }
        }
    }
}
