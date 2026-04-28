using Azure.Identity;
using backend.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Core.Service;
using SportsonBackendShell.Data;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;
using SportsonBackendShell.Data.Repos;
using SportsonBackendShell.Data.Seeders;
using SportsonBackendShell.Extensions;
using System.Collections.Concurrent;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var env = builder.Environment;

builder.Configuration
    .AddJsonFile("appsettings.json")
    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
    .AddEnvironmentVariables();

var keyVaultUri = builder.Configuration["KeyVault:VaultUri"];
if (!string.IsNullOrWhiteSpace(keyVaultUri))
{
    builder.Configuration.AddAzureKeyVault(
        new Uri(keyVaultUri),
        new DefaultAzureCredential());
}

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

Console.WriteLine(connectionString);

if (string.IsNullOrWhiteSpace(connectionString))
{
    throw new InvalidOperationException("Connection string 'DefaultConnection' is missing.");
}

builder.Services.AddDbContext<SportsonContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddControllers();
builder.Services.AddCors(builder.Configuration);
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<INewsRepo, NewsRepo>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddSingleton(new ConcurrentDictionary<string, RefreshToken>());
builder.Services.AddScoped<ILoginRepo, LoginRepo>();
builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddScoped<IUserRightsRepo, UserRightsRepo>();
builder.Services.AddScoped<IUserRightsService, UserRightsService>();
builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddScoped<IAuthenticationRepo, AuthenticationRepo>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<IManualsRepo, ManualsRepo>();
builder.Services.AddScoped<IManualsService, ManualsService>();
builder.Services.AddHttpClient();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

var jwtSecret = builder.Configuration["Jwt:Secret"];
if (string.IsNullOrWhiteSpace(jwtSecret))
{
    throw new InvalidOperationException("Jwt:Secret is missing.");
}

var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret));
builder.Services.AddSingleton(signingKey);
builder.Services.AddJwtAuthentication(builder.Configuration, signingKey);

var app = builder.Build();


using var scope = app.Services.CreateScope();
var db = scope.ServiceProvider.GetRequiredService<SportsonContext>();

await db.Database.MigrateAsync();

if (app.Environment.IsDevelopment()) await SeedData.SeedAsync(db);


app.UseRouting();
app.UseCors("ReactPolicy");
app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();

