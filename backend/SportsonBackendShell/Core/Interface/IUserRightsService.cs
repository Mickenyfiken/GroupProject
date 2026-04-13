namespace SportsonBackendShell.Core.Interface
{
    public interface IUserRightsService
    {
        Task<string?> GetUserIdFromToken(string token);
        Task<string[]?> GetUserRolesFromId(string token,  string userId);
    }
}
