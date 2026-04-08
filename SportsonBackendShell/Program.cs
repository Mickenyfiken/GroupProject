using SportsonBackendShell.Core.Interface;
using SportsonBackendShell.Core.Service;
using SportsonBackendShell.Data.Interfaces;
using SportsonBackendShell.Data.Repos;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors();

builder.Services.AddScoped<INewsRepo, NewsRepo>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddScoped<ILoginRepo, LoginRepo>();
builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddHttpClient();



var app = builder.Build();

app.UseCors(options =>

    options.WithOrigins("FrontEndUrl")
    .AllowAnyHeader()
    .AllowAnyMethod()
    );

app.UseRouting();
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.Run();
