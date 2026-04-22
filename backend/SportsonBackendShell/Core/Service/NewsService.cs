using Microsoft.AspNetCore.Http.HttpResults;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Text.RegularExpressions;

namespace SportsonBackendShell.Core.Service
{
    public class NewsService : INewsService
    {
        private readonly INewsRepo _newsRepo;

        public NewsService(INewsRepo newsRepo)
        {
            _newsRepo = newsRepo;
        }

        public async Task<Article?> GetArticleById(int id)
        {

            var allArticles = await _newsRepo.GetNewsSummaryList();
            var sorted = allArticles.OrderByDescending(a => a.Date).ToList();

            var index = sorted.FindIndex(a => a.Id == id);
            if (index == -1) return null;

            var article = sorted[index];

            article.PrevArticle = index + 1 <
                sorted.Count
                ? new PrevNextArticle { Id = sorted[index + 1].Id, Slug = sorted[index + 1].Slug, Title = sorted[index + 1].Title }
                : null;
            article.NextArticle = index - 1 >= 0
                ? new PrevNextArticle { Id = sorted[index - 1].Id, Slug = sorted[index - 1].Slug, Title = sorted[index - 1].Title }
                : null;

            return article;

        }

        public async Task<List<ArticleSummary?>> GetNewsSummaryList(int amount)
        {
            var newsList = await _newsRepo.GetNewsSummaryList();

            var resList = newsList
            .Select(GetSummary)
            .OrderByDescending(s => s?.Date)
            .Take(amount)
            .ToList();

            return resList;
        }


        private ArticleSummary? GetSummary(Article article)
        {

            var text = Regex.Replace(article.Body ?? "", "<.*?>", "");

            return new ArticleSummary
            {
                Id = article.Id,
                Slug = article.Slug,
                Title = article.Title,
                Body = text?.Length > 200 ? text.Substring(0, 200) : text,
                Date = article.Date,
                Author = article.Author,
                Tags = article.Tags,
                CoverImage = article.CoverImage,
            };
        }


    }
}
