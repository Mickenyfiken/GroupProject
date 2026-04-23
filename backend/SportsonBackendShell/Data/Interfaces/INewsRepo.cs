using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        Task<Article?> GetByIdAsync(int id, bool? asTracking = false);
        IQueryable<Article> QueryAll();

    }
}
