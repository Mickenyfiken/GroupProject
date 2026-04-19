namespace SportsonBackendShell.Data.Entities
{
    public class RefreshToken
    {
        public string? TokenHash { get; set; }
        public string? ExternalToken { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
