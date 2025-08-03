using System.ComponentModel;

namespace PhoneBookAPI.Entities
{
    public class Contact
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set;}
        public required string Gender { get; set; }
        public required string Dob { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public string? Picture { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }



    }
}
