using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManualsController : ControllerBase
    {
        private readonly IManualsService _manualsService;

        public ManualsController(IManualsService manualsService)
        {
            _manualsService = manualsService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetManualsForOneHandbook(int id)
        {
            var response = await _manualsService.GetManualsForOneHandbook(id);
            if(response != null)
            {
                return Ok(response);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllManuals()
        {
            var response = await _manualsService.GetAllManuals();
            if (response != null)
            {
                return Ok(response);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
