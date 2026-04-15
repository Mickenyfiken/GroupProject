using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRightsController : ControllerBase
    {
        private readonly IUserRightsService _userRightsService;

        public UserRightsController(IUserRightsService userRightsService)
        {
            _userRightsService = userRightsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserIdFromToken([FromHeader(Name = "Authorization")] string userToken)
        {
            var response = await _userRightsService.GetUserIdFromToken(userToken);
            if (response == null)
            {
                return StatusCode(400, "Invalid token");
            }
            else
            {
                return Ok(response);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserRolesFromId([FromHeader(Name = "Authorization")] string userToken, string id)
        {
            var response = await _userRightsService.GetUserRolesFromId(userToken, id);

            if (response == null)
            {
                return StatusCode(400, "We still don't have access in sportsons API to do this");
            }
            else
            {
                return Ok(response);
            }

        }
    }
}
