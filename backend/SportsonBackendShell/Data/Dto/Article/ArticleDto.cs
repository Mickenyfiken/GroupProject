using System;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data.DTO.Article;

public class ArticleDto
{
    public int Id { get; set; }
    public string? Slug { get; set; }
    public string? Title { get; set; }
    public string? Body { get; set; }
    public string? Author { get; set; }
    public DateTime CreatedAt { get; set; }
    public string? ImageUrl { get; set; }
    public string? ImageAltText { get; set; }
    public List<Tag> Tags { get; set; } = new();
    public AdjacentArticlesDto AdjacentArticles { get; set; } = new();
}
