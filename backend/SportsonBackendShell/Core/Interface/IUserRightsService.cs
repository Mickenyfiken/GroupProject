namespace SportsonBackendShell.Core.Interface
{
    public interface IUserRightsService
    {
        Task<string> GetUserIdFromToken(string token);
    }
}
