using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class LoginRepo : ILoginRepo
    {
        private readonly HttpClient _httpClient;

        public LoginRepo(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IActionResult> LogIn([FromBody] LoginParameters parameters)
        {
            var response = await _httpClient.PostAsync(https://stage.api.sportson.se/Authorization/login)
            return token;
        }
    }
}
