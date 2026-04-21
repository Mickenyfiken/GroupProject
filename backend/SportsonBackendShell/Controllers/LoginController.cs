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
            if (response == null)
                return StatusCode(500, "Login service returned no response");

            if (response.Token != null)
            {
                var jwt = _jwtService.GenerateToken(response.Token);
                string refreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));

                var tokenHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(refreshToken)));

                await _loginService.SaveRefreshTokenAsync(tokenHash, response.Token, DateTime.UtcNow.AddDays(5));

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddMinutes(2)
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

        [HttpPost("refresh-jwt")]
        public async Task<IActionResult> RefreshJWT()
        {
            if (!Request.Cookies.TryGetValue("refresh_token", out var refreshToken))
                return Unauthorized();
            var rfHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(refreshToken)));
            
            var storedRf = await _loginService.GetRefreshTokenByHashAsync(rfHash);
            if (storedRf == null || storedRf.ExpiresAt < DateTime.UtcNow || storedRf.ExternalToken == null)
                return Unauthorized();

            var freshJWT = _jwtService.GenerateToken(storedRf.ExternalToken);

            string freshRefreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
            var freshRfHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(freshRefreshToken)));
            await _loginService.SaveRefreshTokenAsync(freshRfHash, storedRf.ExternalToken, DateTime.UtcNow.AddDays(5));
            await _loginService.RevokeRefreshTokenAsync(rfHash);

            Response.Cookies.Append(
                "jwt",
                freshJWT,
                new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddMinutes(2)
                }
            );
            Response.Cookies.Append(
                "refresh_token",
                freshRefreshToken,
                new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTimeOffset.UtcNow.AddDays(5)
                }
            );
            return Ok();
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            var jwt = Request.Cookies["jwt"];

            if (string.IsNullOrEmpty(jwt)) return Unauthorized("No Token Provided");

            if (!Request.Cookies.TryGetValue("refresh_token", out var refreshToken))
                return Unauthorized();

            var refreshTokenHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(refreshToken)));

            var token = _jwtService.ExtractToken(jwt);
            var response = await _loginService.Logout(token);

            await _loginService.RevokeRefreshTokenAsync(refreshTokenHash);

            Response.Cookies.Delete("jwt");
            Response.Cookies.Delete("refresh_token");

            if (response.Code == 200) return Ok();
            else return StatusCode(response.Code, response);
        }
    }
}
