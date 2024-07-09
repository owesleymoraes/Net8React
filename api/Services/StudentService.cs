using apidotnetreact.Models;
using apidotnetreact.Repository;

namespace apidotnetreact.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repository;

        public StudentService(IStudentRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await _repository.GetStudents();
        }
        public async Task<IEnumerable<Student>?> GetStudentsByName(string name)
        {
            if (!string.IsNullOrWhiteSpace(name))
            {
                return await _repository.GetStudentsByName(name);
            }
            else
            {
                return null;
            }

        }
        public async Task CreateStudent(Student student)
        {
            await _repository.CreateStudent(student);
        }
        public async Task<Student> GetStudentById(int id)
        {
            var student = await _repository.GetStudent(id);
            return student;
        }
        public async Task UpdateStudent(StudentUpdateRequest student)
        {
            var hasStudent = await _repository.GetStudent(student.Id);
            _ = hasStudent ?? throw new InvalidOperationException("Student not found!");
            await _repository.UpdateStudent(student);
        }
        public async Task DeleteStudent(int id)
        {
            var student = await _repository.GetStudent(id);
            _ = student ?? throw new InvalidOperationException("Student not found!");
            await _repository.DeleteStudent(student);
        }

    }

}