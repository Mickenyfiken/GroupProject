using System;
using SportsonBackendShell.Core.Enums;

namespace SportsonBackendShell.Data.DTO.Manual;

public class ManualResourceDto
{
    public int Id { get; set; }
    public int ManualId { get; set; }
    public string? Url { get; set; }
    public ManualResourceType Type { get; set; } = ManualResourceType.File;
    public string Title { get; set; } = null!;
}
