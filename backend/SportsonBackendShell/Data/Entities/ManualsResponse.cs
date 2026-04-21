namespace SportsonBackendShell.Data.Entities
{
    public class ManualsResponse
    {
        public string Title { get; set; }
        public List<string>? YoutubeVideoURLs { get; set; }
        public List<string>? PdfURLs { get; set; }
        public List<string>? OtherResourceURLs { get; set; }
    }
}
