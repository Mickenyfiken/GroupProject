using System;

namespace SportsonBackendShell.Data.DTO.Article;

public class AdjacentArticleDto
{
    public int Id { get; set; }
    public string? Slug { get; set; }
    public string? Title { get; set; }
    public DateTime CreatedAt { get; set; }
}
