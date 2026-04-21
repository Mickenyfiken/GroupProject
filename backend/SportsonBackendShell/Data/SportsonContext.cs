using System;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data;

public class SportsonContext : DbContext
{
    public SportsonContext(DbContextOptions<SportsonContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Article> Articles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Article>()
        .HasMany(a => a.Tags)
        .WithMany(t => t.Articles);
    }
}

