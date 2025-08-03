using PhoneBookAPI.Entities;

namespace PhoneBookAPI.Services
{
    public interface IContactService
    {
        List<Contact> GetAllContacts();
        Contact GetContactById(int id);
        void DeleteContact(int id);
        void UpdateContact(Contact contact);
    }
    public class ContactService : IContactService
    {
        private readonly PhoneBookContext _context;

        public ContactService(PhoneBookContext context)
        {
            _context = context;
        }

        public void DeleteContact(int id)
        {
            try
            {
                Contact contact = _context.Contacts.Single(c => c.Id == id);
                _context.Contacts.Remove(contact);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Contact> GetAllContacts()
        {
            try
            {
              return _context.Contacts.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Contact GetContactById(int id)
        {
            try
            {
                Contact contact = _context.Contacts.Single(c => c.Id == id);
                return contact;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void UpdateContact(Contact contact)
        {
            try
            {
                _context.Contacts.Update(contact);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
