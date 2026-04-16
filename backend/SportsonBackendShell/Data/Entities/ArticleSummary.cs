namespace SportsonBackendShell.Data.Entities
{
    public class ArticleSummary
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public string? Url { get; set; }
        public string? Publisher { get; set; }
        public DateTime Date_published { get; set; }

    }
}
