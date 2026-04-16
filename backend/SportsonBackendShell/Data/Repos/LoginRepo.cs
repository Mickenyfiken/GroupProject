using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Net.Http.Headers;
using System.Text.Json;

namespace SportsonBackendShell.Data.Repos
{
    public class LoginRepo : ILoginRepo
    {
        private readonly HttpClient _httpClient;

        public LoginRepo(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<LoginResponse> LogIn(LoginParameters parameters)
        {
            var url = "https://stage.api.sportson.se/Authorization/login";
            var response = await _httpClient.PostAsJsonAsync(url, parameters);

            var json = await response.Content.ReadAsStringAsync();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            return JsonSerializer.Deserialize<LoginResponse>(json, options) ?? throw new InvalidOperationException("Failed to deserialize login response.");
        }

        public async Task<LogoutResponse> Logout(string token)
        {
            var url = "https://stage.api.sportson.se/Authorization/logout";
            var request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

            var response = await _httpClient.SendAsync(request);

            var json = await response.Content.ReadAsStringAsync();

            if (string.IsNullOrWhiteSpace(json))
            {
                return new LogoutResponse { Code = (int)response.StatusCode };
            }
            else
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                return JsonSerializer.Deserialize<LogoutResponse>(json, options)
                ?? new LogoutResponse { Code = (int)response.StatusCode };
            }
        }
    }
}
