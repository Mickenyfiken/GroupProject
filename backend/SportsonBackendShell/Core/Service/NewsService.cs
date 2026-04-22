using AutoMapper;
using AutoMapper.QueryableExtensions;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.DTO;
using SportsonBackendShell.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace SportsonBackendShell.Core.Service
{
    public class NewsService : INewsService
    {
        private readonly INewsRepo _newsRepo;
        private readonly IMapper _mapper;

        public NewsService(INewsRepo newsRepo, IMapper mapper)
        {
            _newsRepo = newsRepo;
            _mapper = mapper;
        }

        public async Task<ArticleDto?> GetArticleById(int id) => await _newsRepo.QueryAll()
                .Where(a => a.Id == id)
                .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();


        public async Task<List<ArticleDto>> GetArticles(int limit = 10) => await _newsRepo.QueryAll()
            .OrderByDescending(a => a.CreatedAt)
            .Take(limit)
            .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }
}
