using System;
using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities.Manual;
using SportsonBackendShell.Data.Entities.News;

namespace SportsonBackendShell.Data;

public class SportsonContext : DbContext
{
    public SportsonContext(DbContextOptions<SportsonContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Article> Articles { get; set; }
    public virtual DbSet<Tag> Tags { get; set; }
    public virtual DbSet<Manual> Manuals { get; set; }
    public virtual DbSet<ManualResource> ManualResources { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Article>()
        .HasMany(a => a.Tags)
        .WithMany(t => t.Articles);

        modelBuilder.Entity<Manual>()
            .HasMany(m => m.Resources)
            .WithOne(r => r.Manual)
            .HasForeignKey(r => r.ManualId);
    }
}

