using SportsonBackendShell.Data.Entities;

namespace SportsonBackendShell.Core.Interface
{
    public interface iAuthorizationService
    {
        Task<CurrentUser?> GetMe(string externalToken);
    }
}
