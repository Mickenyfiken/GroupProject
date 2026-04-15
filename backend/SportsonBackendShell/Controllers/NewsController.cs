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
        public async Task<IActionResult> GetArticleById(int id)
        {
            var article = await _newsService.GetArticleById(id);

            if(article != null)
            {
                return Ok(article);
            }

            return NotFound();
        }


        [HttpGet("{amount}")]
        public async Task<IActionResult> GetNewsSummaryList(int amount = 10)
        {
            var newsList = await _newsService.GetNewsSummaryList(amount);
            return Ok(newsList);
        }
    }
}
