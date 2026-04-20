using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Data.Interfaces
{
    public interface IAuthenticationRepo
    {
        Task<CurrentUser?> GetMe(string externalToken);
    }
}
