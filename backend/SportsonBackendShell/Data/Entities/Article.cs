using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportsonBackendShell.Data.Entities
{
    public class Article
    {
        [Key]
        public int Id { get; set; }

        public string? Slug { get; set; }

        [MaxLength(300)]
        public string? Title { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? Body { get; set; }

        [MaxLength(100)]
        public string? Author { get; set; }

        public DateTime CreatedAt { get; set; }

        public string? ImageUrl { get; set; }

        [MaxLength(500)]
        public string? ImageAltText { get; set; }

        public List<Tag> Tags { get; set; } = new();
    }
}