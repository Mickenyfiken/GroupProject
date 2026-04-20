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
                policy.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });

        return services;
    }
}
