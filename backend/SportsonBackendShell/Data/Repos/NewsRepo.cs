using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Text.Json;

namespace SportsonBackendShell.Data.Repos
{
    public class NewsRepo : INewsRepo
    {
        public List<Article> newsList { get; set; }


        public async Task<Article?> GetArticleById(int id)
        {

            var allArticles = await GetAllArticles();

            return newsList.FirstOrDefault(a => a.Id == id);
        }

        public async Task<List<Article>> GetAllArticles()
        {
            var filePath = "Data\\mock-data\\mock-articles.json";
            var jsonString = await File.ReadAllTextAsync(filePath);
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            return JsonSerializer.Deserialize<List<Article>>(jsonString, options)
                ?? throw new Exception("Could not deserialize articles from JSON");
        }

        public async Task<List<Article>> GetNewsSummaryList()
        {


            var filePath = "Data\\mock-data\\mock-articles.json";

            var jsonString = File.ReadAllText(filePath);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            };

            return JsonSerializer.Deserialize<List<Article>>(jsonString, options);

        }
    }
}
