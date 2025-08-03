using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneBookAPI.Entities;
using PhoneBookAPI.Models;
using PhoneBookAPI.Services;

namespace PhoneBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService accountService;

        public AccountController(IAccountService accountService)
        {
            this.accountService = accountService;
        }
        //Endpoints
        [HttpPost,Route("Validate")]
        public IActionResult Validate([FromBody] Login login)
        {
            try
            {
                Contact? contact=accountService.Valiate(login);
                return StatusCode(200, contact);
            }
            catch (Exception ex)
            {

               return StatusCode(500, ex);
            }
        }
        [HttpPost, Route("Register")]
        public IActionResult Register([FromBody] Contact contact)
        {
            try
            {
                accountService.Register(contact);
                return StatusCode(200, contact);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex);
            }
        }
    }
}
