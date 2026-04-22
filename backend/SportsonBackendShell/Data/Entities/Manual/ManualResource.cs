using System;
using System.ComponentModel.DataAnnotations;
using SportsonBackendShell.Core.Enums;

namespace SportsonBackendShell.Data.Entities.Manual;

public class ManualResource
{
    public int Id { get; set; }

    [Required]
    public int ManualId { get; set; }
    public Manual Manual { get; set; } = null!;

    [Required]
    public string? Url { get; set; }

    public ManualResourceType Type { get; set; } = ManualResourceType.File;

    [Required, MaxLength(300)]
    public string Title { get; set; } = null!;
}