using System;
using SportsonBackendShell.Data.Entities.Manual;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Core.Enums;

namespace SportsonBackendShell.Data.Seeders;

public static class ManualSeeder
{
    public static async Task CreateManuals(SportsonContext context)
    {
        if (!await context.Manuals.AnyAsync())
        {
            for (int i = 1; i <= 20; i++)
            {
                var baseDate = DateTime.UtcNow.AddDays(-i);

                context.Manuals.Add(new Manual
                {
                    Title = $"Manual {i}",
                    Description = $"Detta är beskrivning för Manual {i}",
                    CreatedAt = baseDate,
                    Resources =
                    [
                        new ManualResource
                        {
                            Url = "https://rolobikes.com/pdf/rolo-geometry.pdf",
                            Type = ManualResourceType.File,
                            Title = $"Manual {i} - PDF",
                            CreatedAt = baseDate.AddMinutes(1)
                        },
                        new ManualResource
                        {
                            Url = "https://www.youtube.com/watch?v=Aq5WXmQQooo",
                            Type = ManualResourceType.Video,
                            Title = $"Manual {i} - Video",
                            CreatedAt = baseDate.AddMinutes(2)
                        }
                    ]
                });
            }

            await context.SaveChangesAsync();
        }
    }
}
