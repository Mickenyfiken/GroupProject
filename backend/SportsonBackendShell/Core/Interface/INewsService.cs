using SportsonBackendShell.Data.DTO;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        Task<ArticleDto?> GetArticleById(int id);
        Task<List<ArticleDto>> GetArticles(int limit);
    }
}
