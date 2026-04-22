using System;
using System.ComponentModel.DataAnnotations;

namespace SportsonBackendShell.Data.Entities.Manual;

public class Manual
{
    [Key]
    public int Id { get; set; }

    [Required, MaxLength(300)]
    public string Title { get; set; } = null!;

    [MaxLength(900)]
    public string? Description { get; set; }

    public List<ManualResource> Resources { get; set; } = new();
}
