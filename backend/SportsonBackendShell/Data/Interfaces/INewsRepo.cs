using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        Task<Article?> GetArticleById(int id);
        Task<List<Article>> GetNewsSummaryList();
    }
}
