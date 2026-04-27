using System;

namespace backend.Extensions;

public static class CorseExtensions
{
    public static IServiceCollection AddCors(
    this IServiceCollection services,
    IConfiguration _)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("ReactPolicy", policy =>
            {
                policy.WithOrigins(
                    "http://localhost:5173",
                    "https://mango-dune-067b0e803.7.azurestaticapps.net"
                )
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
            });
        });

        return services;
    }
}
