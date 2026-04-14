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

        public Article GetNewsArticleById(int id)
        {
            throw new NotImplementedException();
        }

        public List<Article> GetNewsSummaryList()
        {


            return newsList;

            
        }
    }
}
