namespace TarefasApi.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public required string Titulo { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public bool Concluida { get; set; }
    }
}
