using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class NewsRepo : INewsRepo
    {
        public ArticleFull GetFullNewsArticleById(int id)
        {
            throw new NotImplementedException();
        }

        public List<ArticleSummary> GetNewsSummaryList()
        {
            throw new NotImplementedException();
        }
    }
}
