using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Infrastructure.Persistence.Models
{
    public class UserDb
    {
        public int UserId { get; set; }

        public string Email { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;

        public int RoleId { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedAt { get; set; }

        public int UpdatedBy { get; set; }
    }
}
