using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Interfaces;
using System.Security.Claims;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetMe()
        {
            var externalToken = User.FindFirstValue("external_token");
            if (externalToken == null) return Unauthorized("Could not find token");

            var currentUser = await _authenticationService.GetMe(externalToken);
            if (currentUser == null) return StatusCode(502, "Could not retrieve user from upstream API");

            return Ok(currentUser);
        }
    }
}
