using System;

namespace SportsonBackendShell.Data.DTO.Manual;

public class ManualDto
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public List<ManualResourceDto> Resources { get; set; } = new();
}

