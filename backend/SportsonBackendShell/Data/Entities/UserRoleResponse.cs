namespace SportsonBackendShell.Data.Entities
{
    public class UserRoleResponse
    {
        public string? _id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public DateTime LastLogin { get; set; }
        public bool UserInactivated { get; set; }
        public string[]? ShopAccess { get; set; }
        public Object? UserRights { get; set; }
        public string[]? UserGroups { get; set; }
    }
}
