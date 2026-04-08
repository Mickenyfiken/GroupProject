using System.Text.Json;
using Microsoft.AspNetCore.Http.HttpResults;
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

        public async Task<string> LogIn([FromBody] LoginParameters parameters)
        {
            var uri = "https://stage.api.sportson.se/Authorization/login";
            var response = await _httpClient.PostAsync(uri, parameters);

            var json = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                var data = JsonSerializer.Deserialize(json); //Fråga frontend json sträng till json objekt
                return data;
            }
            //else if(response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            //{
            //    return new UnauthorizedResult();
            //}

            //else
            //{
            //    return new BadRequestResult();
            //}
            return null;
        }
    }
}
