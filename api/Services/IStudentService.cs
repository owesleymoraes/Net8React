using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apidotnetreact.Models;

namespace apidotnetreact.Services
{
    public interface IStudentService
    {
        Task<IEnumerable<Student>> GetStudents();
        Task<Student> GetStudentById(int id);
        Task<IEnumerable<Student>> GetStudentsByName(string name);
        Task CreateStudent(Student student);
        Task UpdateStudent(StudentUpdateRequest student);
        Task DeleteStudent(int id);

    }
}