using System;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data.Seeders;

public static class ArticleSeeder
{
    public static async void CreateTags(SportsonContext context)
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

    public static async void CreateArticles(SportsonContext context)
    {
        if (!await context.Articles.AnyAsync())
        {
            var imageUrl = "https://sportsonstorageaccound.blob.core.windows.net/images/article-image.png";

            string[] authors = { "Erik Johansson", "Maria Nilsson", "Johan Karlsson", "Sara Lindberg" };

            List<Article> articles = [];

            for (int i = 1; i <= 20; i++)
            {
                var baseDate = DateTime.UtcNow.AddDays(-i);
                var index = new Random().Next(authors.Length);

                var article = new Article
                {
                    Title = $"Arikel med en väldigt lång titel som är jättespännande {i}",
                    Slug = $"arikel-med-en-valdigt-lang-titel-som-ar-jattespannande-{i}",
                    Body = "<p><a href=\"#\">Lorem ipsum dolor sit amet</a> consectetur adipisicing elit...</p><ul><li><p>Lorem ipsum dolor sit amet.</p></li><li><p>Repudiandae <i>incidunt<i/> repellat cumque.</p></li></ul><ol><li><p>Lorem ipsum dolor sit amet.</p></li><li><p>Repudiandae incidunt repellat cumque.</p></li></ol><p>Lorem ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit.</p>",
                    Author = authors[index],
                    ImageUrl = imageUrl,
                    ImageAltText = "Article image",
                    CreatedAt = baseDate,
                };

                articles.Add(article);
            }

            context.Articles.AddRange(articles);
            await context.SaveChangesAsync();
        }
    }
}