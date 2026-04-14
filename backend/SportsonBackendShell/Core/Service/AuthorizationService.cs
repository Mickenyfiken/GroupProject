using Microsoft.AspNetCore.Authorization;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Core.Service
{
    public class AuthorizationService : iAuthorizationService
    {
        private readonly IAuthorizationRepo _authorizationRepo;

        public AuthorizationService(IAuthorizationRepo authorizationRepo)
        {
            _authorizationRepo = authorizationRepo;
        }

        public async Task<CurrentUser?> GetMe(string externalToken)
        {
            return await _authorizationRepo.GetMe(externalToken);
        }

    }
}
