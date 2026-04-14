using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        Article GetNewsArticleById(int id);
        List<ArticleSummary> GetNewsSummaryList(int amount);

    }
}
