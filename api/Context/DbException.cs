
using System.Runtime.Serialization;

namespace apidotnetreact.Context
{
    [Serializable]
    public class DbException : Exception
    {
        public DbException() : base() { }
        public DbException(string message) : base(message) { }
        protected DbException(SerializationInfo info, StreamingContext context) : base(info, context) { }
    }
}