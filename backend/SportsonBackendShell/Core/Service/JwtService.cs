using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SportsonBackendShell.Core.Interface;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SportsonBackendShell.Core.Service
{
    public class JwtService : IJwtService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _signingKey;

        public JwtService(IConfiguration config, SymmetricSecurityKey signingKey)
        {
            _config = config;
            _signingKey = signingKey;
        }

        public string GenerateToken(string externalToken)
        {
            var credentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("external_token", externalToken),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(2),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string? ExtractToken(string jwt)
        {
            var handler = new JwtSecurityTokenHandler();
            var decoded = handler.ReadJwtToken(jwt);
            return decoded.Claims.FirstOrDefault(c => c.Type == "external_token")?.Value;
        }
    }
}
