using System.Text.Json;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class LoginService : ILoginService
    {
        //private readonly HttpClient _httpClient;
        private readonly ILoginRepo _loginRepo;

        public LoginService(ILoginRepo loginRepo)
        {
            //_httpClient = factory.CreateClient();
            _loginRepo = loginRepo;
        }


        public async Task<(bool Success, string Token, string Error)> LogIn(LoginParameters parameters) 
        {
            var response = await _loginRepo.LogIn(parameters);
            //var json = await response.Content.ReadAsStringAsync();

            //if (response.IsSuccessStatusCode)
            //{
            //    var data = JsonSerializer.Deserialize<LoginSucess>(json); //Fråga frontend json sträng till json objekt
            //    return (true, data.Token, null);
            //}
            //else if(response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            //{
            //    return new UnauthorizedResult();
            //}

            //else
            //{
            //    return new BadRequestResult();
            //}
            return (false, null, "Login Failed");
            //var response = await _loginRepo.LogIn(parameters);
            //if(response.Success == true)
            //{
            //    var success = new LoginSucess() { Token = response.Token };
            //    return ;
            //}
            //var json = await response.Content.ReadAsStringAsync();

            //if (response)
            //{
            //    var data = JsonSerializer.Deserialize(json); //Fråga frontend json sträng till json objekt
            //    return data;
            //}
            //else
            //{
            //    return null;
            //}
        }
    }
}
