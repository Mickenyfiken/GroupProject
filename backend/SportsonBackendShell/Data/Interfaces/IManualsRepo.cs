using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Entities.Manual;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface IManualsRepo
    {
        Task<Manual?> GetByIdAsync(int id, bool? asTracking = false);
        IQueryable<Manual> QueryAll();
    }
}
