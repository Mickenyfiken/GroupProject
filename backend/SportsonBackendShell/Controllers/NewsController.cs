using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;

namespace SportsonBackendShell.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet("{id}")]
        public IActionResult GetFullNewsArticleById(int id)
        {
            return Ok();
        }


        [HttpGet("{amount}")]
        public IActionResult GetNewsSummaryList(int amount = 10)
        {
            var newsList = _newsService.GetNewsSummaryList(amount);
            return Ok(newsList);
        }
    }
}
