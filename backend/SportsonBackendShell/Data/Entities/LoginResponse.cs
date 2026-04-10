namespace SportsonBackendShell.Data.Entities
{
    public class LoginResponse
    {
        public string? Token { get; set; }
        public string? Message { get; set; }
        public int Code { get; set; }
    }
}
