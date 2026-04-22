using System;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities.Manual;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data.Seeders;

public static class SeedData
{
    public static async Task SeedAsync(SportsonContext context)
    {
        await context.Database.MigrateAsync();

        ManualSeeder.CreateManuals(context);
        ArticleSeeder.CreateTags(context);
        ArticleSeeder.CreateArticles(context);
    }
}