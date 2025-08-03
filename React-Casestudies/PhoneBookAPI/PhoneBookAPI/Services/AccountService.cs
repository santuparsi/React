using PhoneBookAPI.Entities;
using PhoneBookAPI.Models;

namespace PhoneBookAPI.Services
{
    public interface IAccountService
    {
        Contact? Valiate(Login login);
        void Register(Contact contact);
    }
    public class AccountService : IAccountService
    {
        private readonly PhoneBookContext _context;

        public AccountService(PhoneBookContext context)
        {
            _context = context;
        }

        public void Register(Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Contact? Valiate(Login login)
        {
            try
            {
                return _context.Contacts.SingleOrDefault(c => c.Email == login.Email && c.Password == c.Password);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
