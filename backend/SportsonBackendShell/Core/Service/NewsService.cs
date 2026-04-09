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

        public ArticleFull GetFullNewsArticleById(int id)
        {
            throw new NotImplementedException();
        }

        public List<ArticleSummary> GetLatestNewsSummaryList()
        {
            throw new NotImplementedException();
        }
    }
}
