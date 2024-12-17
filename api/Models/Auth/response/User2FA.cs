namespace api.Models.Auth
{
    public class User2FA
    {
        public string SecreteKey { get; set; }
        public string QRCodeImage { get; set; }


        public static User2FA Create(string secretKey, string qrCodeImage)
        {
            return new User2FA
            {
                SecreteKey = secretKey,
                QRCodeImage = qrCodeImage
            };
        }

    }
}