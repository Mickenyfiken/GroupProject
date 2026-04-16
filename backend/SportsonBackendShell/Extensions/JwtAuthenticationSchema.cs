using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.IdentityModel.Tokens.Experimental;

namespace SportsonBackendShell.Extensions
{
    public static class JwtAuthenticationSchema
    {
        public static IServiceCollection AddJwtAuthentication(
                this IServiceCollection services,
                IConfiguration config,
                SymmetricSecurityKey signingKey)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = config["Jwt:Issuer"],
                        ValidAudience = config["Jwt:Audience"],
                        IssuerSigningKey = signingKey
                    };
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = ctx =>
                        {
                            if (ctx.Request.Cookies.ContainsKey("jwt"))
                                ctx.Token = ctx.Request.Cookies["jwt"];
                            return Task.CompletedTask;
                        }
                    };
                });
            return services;
        }
    }
}
