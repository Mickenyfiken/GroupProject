using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Net.Http.Headers;
using System.Collections.Concurrent;
using System.Text.Json;

namespace SportsonBackendShell.Data.Repos
{
    public class LoginRepo : ILoginRepo
    {
        private readonly HttpClient _httpClient;
        private readonly ConcurrentDictionary<string, RefreshToken> _localStore;

        public LoginRepo(HttpClient httpClient, ConcurrentDictionary<string, RefreshToken> localStore)
        {
            _httpClient = httpClient;
            _localStore = localStore;
        }

        public async Task<LoginResponse?> LogIn(LoginParameters parameters)
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

        public Task<RefreshToken?> GetRefreshTokenByHashAsync(string tokenHash)
        {
            _localStore.TryGetValue(tokenHash, out var token);
            return Task.FromResult(token);
        }


        public Task RevokeRefreshTokenAsync(string tokenHash)
        {
            _localStore.TryRemove(tokenHash, out _);
            return Task.CompletedTask;
        }

        public Task SaveRefreshTokenAsync(string tokenHash, string externalToken, DateTime expiresAt)
        {
            _localStore[tokenHash] = new RefreshToken { TokenHash = tokenHash, ExternalToken = externalToken, ExpiresAt = expiresAt};
            return Task.CompletedTask;
        }
    }
}
