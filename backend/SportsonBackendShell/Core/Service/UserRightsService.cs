using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Data.Interfaces;
using SportsonBackendShell.Data.Repos;

namespace SportsonBackendShell.Core.Service
{
    public class UserRightsService : IUserRightsService
    {
        private readonly IUserRightsRepo _userRightsRepo;

        public UserRightsService(IUserRightsRepo userRightsRepo)
        {
            _userRightsRepo = userRightsRepo;
        }

        public async Task<string> GetUserIdFromToken(string token)
        {
            return await _userRightsRepo.GetUserIdFromToken(token);
        }

        public async Task<string> GetUserRolesFromId(string token, string userId)
        {
            return await _userRightsRepo.GetUserRolesFromId(token, userId);
        }
    }
}
