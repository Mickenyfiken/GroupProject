using Microsoft.AspNetCore.Http.HttpResults;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class NewsService : INewsService
    {
        private readonly INewsRepo _newsRepo;

        public NewsService(INewsRepo newsRepo)
        {
            _newsRepo = newsRepo;
        }

        public Article GetArticleById(int id)
        {
            var article = _newsRepo.GetArticleById(id);

            return article;
        }

        public List<ArticleSummary> GetNewsSummaryList(int amount)
        {
            var newsList = _newsRepo.GetNewsSummaryList();

            return newsList.Select(GetSummary).OrderByDescending(s => s.Date_published).Take(amount).ToList();
        }


        private ArticleSummary GetSummary(Article article)
        {
            return new ArticleSummary
            {
                Id = article.Id,
                Title = article.Title,
                Preview = article.Body.Length > 100 ? article.Body.Substring(0, 100) : article.Body,
                Date_published = article.Date_published,
                Slider = article.Slider

            };
        }


    }
}
