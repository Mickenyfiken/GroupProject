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

        public IActionResult LogIn([FromBody] LoginParameters parameters) 
        {
            var response = _loginRepo.LogIn(parameters);

            var json = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                var data = JsonSerializer.Deserialize<>(json); //Fråga frontend json sträng till json objekt
                return Ok(data.token);
            }
            else
            {
                return BadRequest(json);
            }
        }
    }
}
