using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface IAuthorizationRepo
    {
        Task<CurrentUser?> GetMe(string externalToken);
    }
}
