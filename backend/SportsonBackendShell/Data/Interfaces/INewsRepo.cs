using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        Article GetArticleById(int id);
        List<Article> GetNewsSummaryList();
    }
}
