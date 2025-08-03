using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneBookAPI.Entities;
using PhoneBookAPI.Models;
using PhoneBookAPI.Services;

namespace PhoneBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService contactService;

        public ContactController(IContactService contactService)
        {
            this.contactService = contactService;
        }
        [HttpGet,Route("GetAllContacts")]
        public IActionResult GetAll()
        {
            try
            {
                
                return StatusCode(200, contactService.GetAllContacts());
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex);
            }
        }
        [HttpGet, Route("GetContact/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                
                return StatusCode(200,contactService.GetContactById(id));
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex);
            }
        }
        [HttpPut, Route("EditContact")]
        public IActionResult Edit([FromBody] Contact contact)
        {
            try
            {
                contactService.UpdateContact(contact);
                return StatusCode(200, contact);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex);
            }
        }
        [HttpDelete,Route("DeleteContact/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                contactService.DeleteContact(id);
                return StatusCode(200, new JsonResult("Contact Deleted"));
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex);
            }
        }

    }
}
