using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IAuthenticationRepo _authenticationRepo;

        public AuthenticationService(IAuthenticationRepo authenticationRepo)
        {
            _authenticationRepo = authenticationRepo;
        }

        public async Task<CurrentUser?> GetMe(string externalToken)
        {
            return await _authenticationRepo.GetMe(externalToken);
        }

    }
}
