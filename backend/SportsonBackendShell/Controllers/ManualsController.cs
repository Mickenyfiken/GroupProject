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
        public async Task<IActionResult> GetManualById(int id)
        {
            try
            {
                var response = await _manualsService.GetManualById(id);
                return Ok(response);
            }
            catch (System.Exception)
            {

                return NotFound();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetManuals([FromQuery] int limit)
        {
            try
            {
                var response = await _manualsService.GetManuals(limit);
                return Ok(response);
            }
            catch (System.Exception)
            {

                return NotFound();
            }
        }
    }
}
