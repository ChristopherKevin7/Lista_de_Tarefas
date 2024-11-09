using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using TarefasApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class TarefasController : ControllerBase
{
    private readonly TarefasContext _context;

    public TarefasController(TarefasContext context)
    {
        _context = context;
    }

    // GET: api/Tarefas
    [HttpGet]
    public ActionResult<IEnumerable<Tarefa>> GetTarefas()
    {
        return _context.Tarefas.ToList();
    }

    // GET: api/Tarefas/5
    [HttpGet("{id}")]
    public ActionResult<Tarefa> GetTarefa(int id)
    {
        var tarefa = _context.Tarefas.Find(id);

        if (tarefa == null)
        {
            return NotFound();
        }

        return tarefa;
    }

    // POST: api/Tarefas
    [HttpPost]
    public ActionResult<Tarefa> PostTarefa(Tarefa tarefa)
    {
        _context.Tarefas.Add(tarefa);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetTarefa), new { id = tarefa.Id }, tarefa);
    }

    // PUT: api/Tarefas/5
    [HttpPut("{id}")]
    public IActionResult PutTarefa(int id, Tarefa tarefa)
    {
        if (id != tarefa.Id)
        {
            return BadRequest();
        }

        _context.Entry(tarefa).State = EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // DELETE: api/Tarefas/5
    [HttpDelete("{id}")]
    public IActionResult DeleteTarefa(int id)
    {
        var tarefa = _context.Tarefas.Find(id);
        if (tarefa == null)
        {
            return NotFound();
        }

        _context.Tarefas.Remove(tarefa);
        _context.SaveChanges();

        return NoContent();
    }
}