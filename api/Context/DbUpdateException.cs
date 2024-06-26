
using System.Runtime.Serialization;

namespace apidotnetreact.Context
{

    [Serializable]
    public class DbUpdateException : Exception
    {

        public DbUpdateException(string message) : base(message)
        {
        }

        protected DbUpdateException(SerializationInfo info, StreamingContext context) : base(info, context) { }
    }


}

