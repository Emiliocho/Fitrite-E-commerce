using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Domain.Entities
{
    public sealed class User
    {
        public int UserId { get; private set; }
        public string Email { get; private set; }
        public byte[] PasswordHash { get; private set; }
        public int CreatedBy { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public int UpdatedBy { get; private set; }
        public int RoleId { get; private set; }

        public User(string email, byte[] password, int created_by, DateTime created_at, int updated_by, int role_id)
        {
            this.Email = email;
            this.PasswordHash = password;
            this.CreatedBy = created_by;
            this.CreatedAt = created_at;
            this.UpdatedBy = updated_by;
            this.RoleId = role_id;
        }
    }
}