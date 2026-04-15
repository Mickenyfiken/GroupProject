namespace SportsonBackendShell.Core.Interface
{
    public interface IJwtService
    {
        string GenerateToken(string externalToken);
    }
}
