using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Interfaces;
using System.Security.Claims;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly iAuthorizationService _authorizationService;

        public AuthorizationController(iAuthorizationService authorizationService)
        {
            _authorizationService = authorizationService;
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetMe()
        {
            var externalToken = User.FindFirstValue("external_token");
            if (externalToken == null) return Unauthorized("Could not find token");

            var currentUser = await _authorizationService.GetMe(externalToken);
            if (currentUser == null) return StatusCode(502, "Could not retrieve user from upstream API");

            return Ok(currentUser);
        }
    }
}
