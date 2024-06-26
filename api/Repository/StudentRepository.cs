
using apidotnetreact.Context;
using apidotnetreact.Models;
using Microsoft.EntityFrameworkCore;
using DbUpdateException = apidotnetreact.Context.DbUpdateException;

namespace apidotnetreact.Repository
{
    public class StudentRepository : IStudentRepository
    {
        private readonly AppDbContext _context;


        public StudentRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Student>> GetStudents()
        {
            try
            {
                return await _context.Students.ToListAsync();
            }
            catch
            {
                throw new DbException("An unexpected error occurred while accessing the database.");
            }
        }
        public async Task<IEnumerable<Student>> GetStudentsByName(string name)
        {
            try
            {
                var student = await _context.Students.Where(item => item.Name.Contains(name)).ToArrayAsync();
                return student;
            }
            catch
            {

                throw new DbException("An unexpected error occurred while accessing the database.");
            }


        }
        public async Task<Student> GetStudent(int id)
        {
            try
            {
                var student = await _context.Students.FindAsync(id);
                return student!;

            }
            catch
            {

                throw new DbException("An unexpected error occurred while accessing the database.");
            }

        }
        public async Task CreateStudent(Student student)
        {
            try
            {
                _context.Students.Add(student);
                await _context.SaveChangesAsync();
            }
            catch
            {

                throw new DbUpdateException("An unexpected error occurred while creating the database.");
            }

        }
        public async Task UpdateStudent(Student student)
        {

            var existingEntity = await _context.Students.FindAsync(student.Id);
            if (existingEntity == null)
            {
                throw new KeyNotFoundException("Student not found.");
            }

            _context.Entry(existingEntity).CurrentValues.SetValues(student);

            await _context.SaveChangesAsync();



        }

        public async Task DeleteStudent(Student student)
        {
            try
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
            catch
            {

                throw new DbUpdateException("An unexpected error occurred while delete the database.");
            }

        }


    }
}