using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
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

            return JsonSerializer.Deserialize<LoginResponse?>(json, options);
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

        public Task SaveRefreshTokenAsync(string tokenHash, string userId, DateTime expiresAt)
        {
            _localStore[tokenHash] = new RefreshToken { TokenHash = tokenHash, UserId = userId, ExpiresAt = expiresAt};
            return Task.CompletedTask;
        }
    }
}
