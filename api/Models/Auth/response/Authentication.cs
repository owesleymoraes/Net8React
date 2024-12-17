namespace api.Models.Auth
{
    public class Authentication
    {
        public bool Success { get; set; }
        public bool IsFirstAccess { get; set; }


        public static Authentication Create(bool isSuccess, bool isKeyEmpty)
        {
            return new Authentication
            {
                Success = isSuccess,
                IsFirstAccess = isKeyEmpty
            };
        }
    }

}