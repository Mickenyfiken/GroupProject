using System;
using AutoMapper;
using SportsonBackendShell.Data.DTO;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Mapper;

public class ArticleProfile : Profile
{
    public ArticleProfile()
    {
        CreateMap<Article, ArticleDto>();
    }
}