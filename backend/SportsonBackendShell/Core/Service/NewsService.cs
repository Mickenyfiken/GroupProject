using AutoMapper;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using AutoMapper.QueryableExtensions;
using SportsonBackendShell.Data.DTO.Article;

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

        public async Task<ArticleDto?> GetArticleById(int id)
        {

            var article = await _newsRepo.QueryAll()
                .Where(a => a.Id == id)
                .OrderByDescending(a => a.CreatedAt)
                .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();

            if (article == null) return null;

            article.AdjacentArticles = await GetAdjacentArticles(article.CreatedAt);

            return article;
        }

        private async Task<AdjacentArticlesDto> GetAdjacentArticles(DateTime createdAt)
        {
            var PrevArticle = await _newsRepo.QueryAll()
                .Where(a => a.CreatedAt < createdAt)
                .OrderByDescending(a => a.CreatedAt)
                .ProjectTo<AdjacentArticleDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();

            var NextArticle = await _newsRepo.QueryAll()
                .Where(a => a.CreatedAt > createdAt)
                .OrderBy(a => a.CreatedAt)
                .ProjectTo<AdjacentArticleDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();

            return new AdjacentArticlesDto
            {
                PrevArticle = PrevArticle,
                NextArticle = NextArticle
            };
        }

        public async Task<List<ArticleDto>> GetArticles(int limit) => await _newsRepo.QueryAll()
                .OrderByDescending(a => a.CreatedAt)
                .Take(limit)
                .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
    }
}
