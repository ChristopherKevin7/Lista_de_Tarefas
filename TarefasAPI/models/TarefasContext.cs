using Microsoft.EntityFrameworkCore;

namespace TarefasApi.Models
{
    public class TarefasContext : DbContext
    {
        public TarefasContext(DbContextOptions<TarefasContext> options)
            : base(options)
        {
        }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}
