using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class NewsRepo : INewsRepo
    {
        public List<Article> newsList { get; set; }
        public NewsRepo()
        {
            newsList = new List<Article>()
            {   new Article {Id = 1, Title = "Artikel 1", Body = "Detta är artikel 1 på sportson", Date_published = new DateTime(2005, 01, 01)},
                new Article {Id = 2, Title = "Artikel 2", Body = "Detta är artikel 2 på sportson", Date_published = new DateTime(2025, 03, 22)}
            };
        }

        public async Task<Article?> GetArticleById(int id)
        {

            return newsList.FirstOrDefault(a => a.Id == id);
        }

        public async Task<List<Article>> GetNewsSummaryList()
        {

            return newsList;

        }
    }
}
