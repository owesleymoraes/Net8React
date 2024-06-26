using apidotnetreact.Models;

namespace apidotnetreact.Repository
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Student>> GetStudents();
        Task<Student> GetStudent(int id);
        Task<IEnumerable<Student>> GetStudentsByName(string name);
        Task CreateStudent(Student student);
        Task UpdateStudent(Student student);
        Task DeleteStudent(Student student);

    }
}