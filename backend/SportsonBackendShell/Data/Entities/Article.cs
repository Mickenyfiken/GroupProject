using Microsoft.OpenApi;

namespace SportsonBackendShell.Data.Entities
{
    public class Article
    {
        public int Id { get; set; }
        public string? Slug {get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public string? Author { get; set; }
        public DateTime Date {  get; set; }
        public CoverImage? CoverImage { get; set; }
        public string[]? Tags { get; set; }
        public PrevNextArticle? NextArticle { get; set; }
        public PrevNextArticle? PrevArticle { get; set; }
 
    }
    
    public class PrevNextArticle
    {
        public int Id { get; set; }
        public string? Slug { get; set; }
        public string? Title { get; set; }
    }

}

