using System;
using System.ComponentModel.DataAnnotations;

namespace SportsonBackendShell.Data.Entities;

public class Tag
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = null!;

    public List<Article> Articles { get; set; } = new();
}
