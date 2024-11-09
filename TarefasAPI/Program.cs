using Microsoft.EntityFrameworkCore;
using TarefasApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TarefasContext>(options =>
    options.UseInMemoryDatabase("TarefasDb"));

// Add services to the container.
// Adicione o serviço de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // Permite todas as origens (mude isso conforme necessário para segurança)
              .AllowAnyMethod()  // Permite qualquer método (GET, POST, PUT, DELETE, etc.)
              .AllowAnyHeader(); // Permite qualquer cabeçalho
    });
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

app.Run();
