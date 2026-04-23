using System;
using System.ComponentModel.DataAnnotations;

namespace SportsonBackendShell.Data.Entities;

public abstract class BaseEntity
{
    [Key]
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
}
