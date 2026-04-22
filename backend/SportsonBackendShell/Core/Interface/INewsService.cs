using SportsonBackendShell.Data.DTO.Article;

namespace SportsonBackendShell.Core.Interface
{
    public interface INewsService
    {
        Task<ArticleDto?> GetArticleById(int id);
        Task<List<ArticleDto>> GetArticles(int limit);
    }
}
