using Microsoft.EntityFrameworkCore;
namespace PhoneBookAPI.Entities
{
    public class PhoneBookContext:DbContext
    {
        public PhoneBookContext(DbContextOptions<PhoneBookContext> options):base(options) 
        {
           SaveChanges();
        }
        public DbSet<Contact> Contacts { get; set; }

    }
}
