using System;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data.Seeders;

public static class ArticleSeeder
{
    public static async Task CreateTags(SportsonContext context)
    {
        if (!await context.Tags.AnyAsync())
        {
            context.Tags.AddRange(
                new Tag { Name = "Alla" },
                new Tag { Name = "Marknad" },
                new Tag { Name = "Leverantörer" },
                new Tag { Name = "Förmånscykel" }
            );

            await context.SaveChangesAsync();
        }
    }

    public static async Task CreateArticles(SportsonContext context)
    {
        if (!await context.Articles.AnyAsync())
        {
            var random = new Random();
            var imageUrl = "https://sportsonstorageaccound.blob.core.windows.net/images/article-image.png";
            var tags = await context.Tags.ToListAsync();

            string[] authors = { "Erik Johansson", "Maria Nilsson", "Johan Karlsson", "Sara Lindberg" };

            List<Article> articles = [];

            for (int i = 1; i <= 20; i++)
            {
                var baseDate = DateTime.UtcNow.AddDays(-i);
                var authorIndex = random.Next(authors.Length);
                var tagIndex = random.Next(1, tags.Count);

                var article = new Article
                {
                    Title = $"Otrolig cykelartikel no {i}",
                    Slug = $"otrolig-cykelartikel-no-{i}",
                    Body = "<p><a href=\"#\">Lorem ipsum dolor sit amet</a> consectetur adipisicing elit...</p><ul><li><p>Lorem ipsum dolor sit amet.</p></li><li><p>Repudiandae <i>incidunt<i/> repellat cumque.</p></li></ul><ol><li><p>Lorem ipsum dolor sit amet.</p></li><li><p>Repudiandae incidunt repellat cumque.</p></li></ol><p>Lorem ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit.</p>",
                    Author = authors[authorIndex],
                    ImageUrl = imageUrl,
                    ImageAltText = "Article image",
                    CreatedAt = baseDate,
                    Tags = new List<Tag> { tags[tagIndex] },
                };

                articles.Add(article);
            }

            context.Articles.AddRange(articles);
            await context.SaveChangesAsync();
        }
    }
}