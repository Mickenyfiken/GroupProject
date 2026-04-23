using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetArticleById(int id)
        {
            var article = await _newsService.GetArticleById(id);

            if (article != null)
            {
                return Ok(article);
            }

            return NotFound();
        }


        [HttpGet]
        public async Task<IActionResult> GetArticles([FromQuery] int limit)
        {
            var newsList = await _newsService.GetArticles(limit);
            return Ok(newsList);
        }
    }
}
