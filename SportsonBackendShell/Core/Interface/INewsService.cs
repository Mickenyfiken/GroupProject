using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        ArticleFull GetFullNewsArticleById(int id);
        List<ArticleSummary> GetNewsSummaryList();
    }
}
