using login_app.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace login_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowFrontend")]
    public class UserController : ControllerBase
    {
        private readonly UserDBContext _context;
        public UserController(UserDBContext context)
        {
            _context = context;
        }

       [HttpPost("CreateNewUser")]
public IActionResult CreateNewUser(User obj)
{
    var userExistwithEmail = _context.Users.SingleOrDefault(u => u.emailId == obj.emailId);
    
    if (userExistwithEmail == null)
    {
        _context.Users.Add(obj);
        _context.SaveChanges();
        return Created("User Registered Success", obj);
    }
    else
    {
        return StatusCode(400, "User with this email already exists");
    }
}


        [HttpPost("Login")]
        public IActionResult Login(UserLogin obj)
        {   
            var user = _context.Users.SingleOrDefault(u => u.emailId == obj.emailId && u.password == obj.password);
            if (user == null)
            {
                return StatusCode(401, "Wrong Credentials");
            }
            else
            {
                return StatusCode(200, user);
            }
        }

        [HttpGet("getUsers")]
        public IActionResult getUsers()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }
    }
}
