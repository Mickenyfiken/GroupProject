using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        Article GetNewsArticleById(int id);
        List<Article> GetNewsSummaryList();
    }
}
