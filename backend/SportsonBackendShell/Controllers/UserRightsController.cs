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
            return Ok(response);
        }
    }
}
