using Microsoft.OpenApi;

namespace SportsonBackendShell.Data.Entities
{
    public class Article
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public bool Slider { get; set; }
        public bool Updated { get; set; }
        public string? Url { get; set; }
        public string? Publisher { get; set; }
        public DateTime Date_published {  get; set; }
        public DateTime Date_updated { get; set; }
        public DateTime? Date_present { get; set; }
        //public Contact Published_by { get; set; }
        //public List<Contact> Co_publisher { get; set; }
        //public List<Tags> tags { get; set; }
    }
}
