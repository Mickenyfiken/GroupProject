using AutoMapper;
using AutoMapper.QueryableExtensions;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.DTO.Manual;
using SportsonBackendShell.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace SportsonBackendShell.Core.Service
{
    public class ManualsService : IManualsService
    {
        private readonly IManualsRepo _manualRepo;
        private readonly IMapper _mapper;

        public ManualsService(IManualsRepo newsRepo, IMapper mapper)
        {
            _manualRepo = newsRepo;
            _mapper = mapper;
        }

        public async Task<ManualDto?> GetManualById(int id) => await
        _manualRepo.QueryAll()
            .Where(m => m.Id == id)
            .ProjectTo<ManualDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync();

        public async Task<List<ManualDto>> GetManuals(int limit) => await
         _manualRepo.QueryAll()
            .OrderByDescending(m => m.CreatedAt)
            .Take(limit)
            .ProjectTo<ManualDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }
}
