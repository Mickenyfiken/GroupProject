using System;

namespace SportsonBackendShell.Data.DTO.Article;

public class AdjacentArticlesDto
{
    public AdjacentArticleDto? PrevArticle { get; set; }
    public AdjacentArticleDto? NextArticle { get; set; }
}
