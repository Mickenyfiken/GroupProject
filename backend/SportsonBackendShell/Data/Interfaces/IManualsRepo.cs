using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface IManualsRepo
    {
        Task<ManualsResponse?> GetManualsForOneHandbook(int id);
    }
}
