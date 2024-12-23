using System.Text;
using api.Services;
using apidotnetreact.Context;
using apidotnetreact.Repository;
using apidotnetreact.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
  {
      c.SwaggerDoc("v1", new OpenApiInfo { Title = "Students.API", Version = "v1" });

      // Habilitar autorização usando o Swagger (JWT)
      c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
      {
          Name = "Authorization",
          Type = SecuritySchemeType.ApiKey,
          Scheme = "Bearer",
          BearerFormat = "JWT",
          In = ParameterLocation.Header,
          Description = "JWT Authorization header using the Bearer scheme." +
          " \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below" +
          "\r\n\r\nExample \"Bearer 12345abcdef\"",
      });
      c.AddSecurityRequirement(new OpenApiSecurityRequirement{
        {
            new OpenApiSecurityScheme {
                Reference = new OpenApiReference {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            }, new String[]{}
        }
      });
  }
);

// connection string mysql
// string connection = builder.Configuration.GetConnectionString("DefaultConnection");

// connection string postgresql
string connection = builder.Configuration.GetConnectionString("ConnectionPostgresqlStaging");

// Configurando o DbContext para usar o MySQL

// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseMySql(connection, ServerVersion.AutoDetect(connection)));

// Configurando o DbContext para usar o PostgreSQL

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connection)); // UseNpgsql é usado para PostgreSQL

// Configuração do Identity

// Adiciona o sistema de identidade do ASP.NET Core ao contêiner de serviços.
// IdentityUser é o modelo padrão de usuário, e IdentityRole é o modelo de função.
// Isso permite autenticação e gerenciamento de usuários e papéis.
builder.Services.AddIdentity<IdentityUser, IdentityRole>()

    // Configura o Identity para usar o Entity Framework Core como a implementação de armazenamento.
    // AppDbContext é o contexto do banco de dados onde os dados do usuário e das funções serão armazenados.
    .AddEntityFrameworkStores<AppDbContext>()

    // Adiciona os provedores de token padrão que são usados para geração de tokens como o de recuperação de senha, confirmação de e-mail, etc.
    .AddDefaultTokenProviders();

var secretKey = builder.Configuration["JWT:SecretKey"] ?? throw new ArgumentException("Invalid secret key!!");

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer((options) =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ClockSkew = TimeSpan.Zero,
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(secretKey))
    };
});


builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.WithOrigins("http://localhost:5173");
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
