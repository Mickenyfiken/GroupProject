using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Entities
{
    public class ArticleSummary
    {
        public int Id { get; set; }
        public string? Slug { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public string? Author { get; set; }
        public DateTime Date { get; set; }
        public CoverImage? CoverImage { get; set; }
        public string[]? Tags { get; set; }
    }
}

