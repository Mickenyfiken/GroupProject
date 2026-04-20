using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface IAuthenticationService
    {
        Task<CurrentUser?> GetMe(string externalToken);
    }
}
