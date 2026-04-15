using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using System.Text;
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

        public async Task<LoginSucess> LogIn(LoginParameters parameters)
        {
            var url = "https://stage.api.sportson.se/Authorization/login";
            //var parameterJSON = JsonSerializer.Serialize(parameters);
            //var content = new StringContent(parameterJSON, Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsJsonAsync(url, parameters);

            var json = await response.Content.ReadAsStringAsync();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            return JsonSerializer.Deserialize<LoginSucess>(json, options);

            //var json = await response.Content.ReadAsStringAsync();

            //if (response.IsSuccessStatusCode)
            //{
            //    var data = JsonSerializer.Deserialize<LoginSucess>(json); //Fråga frontend json sträng till json objekt
            //    return (true, data.Token, null);
            //}
            ////else if(response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            ////{
            ////    return new UnauthorizedResult();
            ////}

            ////else
            ////{
            ////    return new BadRequestResult();
            ////}
            //return (false, null, "Login Failed");
        }
    }
}
