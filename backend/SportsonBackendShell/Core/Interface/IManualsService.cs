using SportsonBackendShell.Data.DTO.Manual;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Entities.Manual;

namespace SportsonBackendShell.Core.Interface
{
    public interface IManualsService
    {
        Task<ManualDto?> GetManualById(int id);
        Task<List<ManualDto>> GetManuals(int limit);
    }
}
