using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;

namespace ProEventos.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Evento> eventos { get; set; }

        public DataContext(DbContextOptions options) : base(options)
        {
        }
    }
}