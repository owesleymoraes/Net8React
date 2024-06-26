using apidotnetreact.Models;
using apidotnetreact.Services;
using Microsoft.AspNetCore.Mvc;


namespace apidotnetreact.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly IStudentService _service;

        public StudentController(IStudentService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Student>>> GetStudents()
        {
            try
            {
                var students = await _service.GetStudents();
                return Ok(students);

            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter estudantes");

            }
        }
        [HttpGet("StudentByName")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Student>>> GetStudentByName([FromQuery] string name)
        {
            try
            {
                var students = await _service.GetStudentsByName(name);
                if (students == null)
                {
                    return NotFound($"Não existem alunos com esses nomes");

                }

                return Ok(students);


            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter estudantes");

            }
        }

        [HttpGet("Student/{id}", Name = "GetStudentById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Student>>> GetStudentById(int id)
        {
            try
            {
                var students = await _service.GetStudentById(id);
                if (students == null)
                {
                    return NotFound($"Não existem alunos com esse identificador");

                }

                return Ok(students);

            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter estudantes");

            }
        }

        [HttpPost]
        public async Task<ActionResult> Create(Student student)
        {
            try
            {
                await _service.CreateStudent(student);
                return CreatedAtRoute(nameof(GetStudentById), new { id = student.Id }, student);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter estudantes");

            }

        }

        [HttpPut("Update")]
        public async Task<ActionResult> Update([FromBody] Student student)
        {
            try
            {

                await _service.UpdateStudent(student);
                return Ok(student.Id);

            }
            catch
            {
                return BadRequest("Request inválido");

            }

        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await _service.DeleteStudent(id);
                return Ok(id);

            }
            catch
            {
                return BadRequest("Request inválido");

            }

        }

    }
}