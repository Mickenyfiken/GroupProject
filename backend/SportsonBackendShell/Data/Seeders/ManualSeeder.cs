using System;
using SportsonBackendShell.Data.Entities.Manual;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Core.Enums;

namespace SportsonBackendShell.Data.Seeders;

public static class ManualSeeder
{
    public static async void CreateManuals(SportsonContext context)
    {
        if (!await context.Manuals.AnyAsync())
        {
            for (int i = 1; i <= 20; i++)
            {
                var baseDate = DateTime.UtcNow.AddDays(-i);

                var manual = new Manual
                {
                    Title = $"Manual {i}",
                    Description = $"Detta är beskrivning för Manual {i}",
                    CreatedAt = baseDate
                };

                context.Manuals.Add(manual);
                await context.SaveChangesAsync();

                context.ManualResources.AddRange(
                    new ManualResource
                    {
                        ManualId = manual.Id,
                        Url = "https://sportsonstorageaccound.blob.core.windows.net/manuals/SportsonViewProduktbeskrivning.pdf",
                        Type = ManualResourceType.File,
                        Title = $"Manual {i} - PDF",
                        CreatedAt = baseDate.AddMinutes(1)
                    },
                    new ManualResource
                    {
                        ManualId = manual.Id,
                        Url = "https://www.youtube.com/watch?v=Aq5WXmQQooo",
                        Type = ManualResourceType.Video,
                        Title = $"Manual {i} - Video",
                        CreatedAt = baseDate.AddMinutes(2)
                    }
                );
            }

            await context.SaveChangesAsync();
        }
    }
}
