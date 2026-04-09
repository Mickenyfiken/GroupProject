using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        ArticleFull GetFullNewsArticleById(int id);
        List<ArticleSummary> GetLatestNewsSummaryList();
    }
}
