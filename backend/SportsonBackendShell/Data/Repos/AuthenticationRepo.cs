using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace SportsonBackendShell.Data.Repos
{
    public class AuthenticationRepo : IAuthenticationRepo
    {
        private readonly HttpClient _httpClient;

        public AuthenticationRepo(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<CurrentUser?> GetMe(string externalToken)
        {
            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", externalToken.Replace("Bearer ", ""));

            var userNameResponse = await _httpClient.GetAsync("https://stage.api.sportson.se/users/username");
            if (!userNameResponse.IsSuccessStatusCode) return null;
            var name = await userNameResponse.Content.ReadFromJsonAsync<UserNameResponse>();

            var userIdResponse = await _httpClient.GetAsync("https://stage.api.sportson.se/users/userid");
            if (!userIdResponse.IsSuccessStatusCode) return null;
            var userIdResult = await userIdResponse.Content.ReadFromJsonAsync<UserIdResponse>();

            return new CurrentUser { Id = userIdResult?.Id ?? "", Name = name?.Name ?? "" };
        }
    }
}
