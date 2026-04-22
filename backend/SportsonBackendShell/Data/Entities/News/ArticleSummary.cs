namespace SportsonBackendShell.Data.Entities.News
{
    public class ArticleSummary
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? Preview { get; set; }
        public bool Slider { get; set; }
        public DateTime Date_published { get; set; }

    }
}
