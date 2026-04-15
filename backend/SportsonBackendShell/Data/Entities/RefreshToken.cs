namespace SportsonBackendShell.Data.Entities
{
    public class RefreshToken
    {
        public string? TokenHash { get; set; }
        public string? UserId { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
