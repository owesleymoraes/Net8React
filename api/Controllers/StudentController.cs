using apidotnetreact.Models;
using apidotnetreact.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace apidotnetreact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Create([FromBody] Student student)
        {
            try
            {
                await _service.CreateStudent(student);
                return CreatedAtRoute(nameof(GetStudentById), new { id = student.Name }, student);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter estudantes");

            }

        }

        [HttpPut("Update/{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] StudentUpdateRequest student)
        {
            try
            {

                await _service.UpdateStudent(student);
                return Ok(new { id = id });

            }
            catch
            {
                return BadRequest("Request inválido");

            }

        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            try
            {
                await _service.DeleteStudent(id);
                return Ok(new { id = id });

            }
            catch
            {
                return BadRequest("Request inválido");

            }

        }

    }
}