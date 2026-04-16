using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        Task<Article?> GetArticleById(int id);
        Task<List<ArticleSummary?>> GetNewsSummaryList(int amount);

    }
}
