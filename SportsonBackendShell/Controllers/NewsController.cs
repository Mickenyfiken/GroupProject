using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        //176
        [HttpGet("{id}")]
        public IActionResult GetFullNewsArticleById(int id)
        {
            return Ok();
        }

        //157 conflicting med 162
        //Vi hämtar väl aldrig hela artiklar till newfeeden? det är väl bara sammanfattningar och vid tryck hämtas hela artikeln?
        //Antingen båda eller bara GetNewsArticleListByDate och frontend får sammmanfatta

        //[HttpGet("{amount}")]
        //public IActionResult GetNewsArticleListByDate(int amount)
        //{
        //    return Ok();
        //}

        [HttpGet("{amount}")]
        public IActionResult GetLatestNewsSummaryList(int amount) //ska vi haden här byDate eller/och att man kan skicka in hur många man vill ha?
        {
            return Ok();
        }
    }
}
