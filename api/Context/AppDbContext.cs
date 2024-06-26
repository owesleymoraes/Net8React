using apidotnetreact.Models;
using Microsoft.EntityFrameworkCore;

namespace apidotnetreact.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Student>().HasData(
                new Student
                {
                    Id = 1,
                    Name = "Maria da Penha",
                    Email = "mariapenha@yahoo.com",
                    Age = 23
                },
                new Student
                {
                    Id = 2,
                    Name = "Manuel Bueno",
                    Email = "manuelbueno@yahoo.com",
                    Age = 22
                }
            );
        }
    }
}