using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface INewsRepo
    {
        Task<Article?> GetByIdAsync(int id, bool? asTracking = false);
        IQueryable<Article> QueryAll();

    }
}
