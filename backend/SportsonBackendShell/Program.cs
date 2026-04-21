using backend.Extensions;
using Microsoft.IdentityModel.Tokens;
using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Core.Service;
using SportsonBackendShell.Data.Interfaces;
using SportsonBackendShell.Data.Repos;
using SportsonBackendShell.Extensions;
using System.Collections.Concurrent;
using System.Text;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<SportsonContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Development")));

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
builder.Services.AddHttpClient();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

var jwtSecret = builder.Configuration["Jwt:Secret"]!;
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret));
builder.Services.AddSingleton(signingKey);
builder.Services.AddJwtAuthentication(builder.Configuration, signingKey);

var app = builder.Build();

app.UseRouting();
app.UseCors("ReactPolicy");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
