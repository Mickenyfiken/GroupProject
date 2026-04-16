using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Net.Http.Headers;
using System.Text.Json;

namespace SportsonBackendShell.Data.Repos
{
    public class UserRightsRepo : IUserRightsRepo
    {
        private readonly HttpClient _httpClient;

        public UserRightsRepo(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<string?> GetUserIdFromToken(string token)
        {
            var url = "https://stage.api.sportson.se/users/userid";

            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", token.Replace("Bearer ", ""));

            var response = await _httpClient.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();
            
            if (json == string.Empty)
            {
                return null;
            }
            else
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var result = JsonSerializer.Deserialize<UserIdResponse>(json, options);
                return result?.Id;
            }
        }

        public async Task<string[]?> GetUserRolesFromId(string token, string userId)
        {
            var url = $"https://stage.api.sportson.se/users/user/{userId}";

            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", token.Replace("Bearer ", ""));

            var response = await _httpClient.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();

            if (json == string.Empty)
            {
                return null;
            }
            else
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var result = JsonSerializer.Deserialize<UserRoleResponse>(json, options);
                return result?.UserGroups;
            }
        }
    }
}
