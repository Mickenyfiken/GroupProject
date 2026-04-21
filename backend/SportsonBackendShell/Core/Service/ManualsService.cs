using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class ManualsService : IManualsService
    {
        private readonly IManualsRepo _manualRepo;

        public ManualsService(IManualsRepo manualRepo)
        {
            _manualRepo = manualRepo;
        }

        public async Task<ManualsResponse?> GetManualsForOneHandbook(int id)
        {
            return await _manualRepo.GetManualsForOneHandbook(id);
        }
    }
}
