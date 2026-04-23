using System;
using AutoMapper;
using SportsonBackendShell.Data.DTO;
using SportsonBackendShell.Data.DTO.Article;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Mapper;

public class ArticleProfile : Profile
{
    public ArticleProfile()
    {
        CreateMap<Article, ArticleDto>();
        CreateMap<Article, AdjacentArticleDto>();
    }
}