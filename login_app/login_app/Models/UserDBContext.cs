using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;


namespace login_app.Models
{
    public class UserDBContext : DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
    [Table("users")]
    public class User
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string emailId { get; set; }

        public string password { get; set; }
        public DateTime createDate { get; set; }

        public string fullName { get; set; }
        public string mobileNo { get; set; }

    }

    public class UserLogin
    {
        public string emailId { get; set; }
        public string password { get; set; }
    }
}
