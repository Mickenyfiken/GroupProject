using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        Article GetArticleById(int id);
        List<ArticleSummary> GetNewsSummaryList(int amount);

    }
}
