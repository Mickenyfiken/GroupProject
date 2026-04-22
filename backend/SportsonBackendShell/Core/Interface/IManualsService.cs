using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface IManualsService
    {
        Task<ManualsResponse?> GetManualsForOneHandbook(int id);
    }
}
