namespace SportsonBackendShell.Data.Interfaces
{
    public interface IUserRightsRepo
    {
        Task<string> GetUserIdFromToken(string token);
    }
}
