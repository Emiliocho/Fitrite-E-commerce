using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Domain.Entities
{
    public sealed class User
    {
        // Crear usuario nuevo
        public User(
            string email,
            string passwordHash,
            int roleId,
            int createdBy,
            DateTime createdAt,
            int updatedBy)
        {
            Email = email;
            PasswordHash = passwordHash;
            RoleId = roleId;
            CreatedBy = createdBy;
            CreatedAt = createdAt;
            UpdatedBy = updatedBy;
        }

        // Usuario existente desde BD
        public User(
            int userId,
            string email,
            string passwordHash,
            int roleId,
            int createdBy,
            DateTime createdAt,
            int updatedBy)
            : this(
                email,
                passwordHash,
                roleId,
                createdBy,
                createdAt,
                updatedBy)
        {
            UserId = userId;
        }

        public int UserId { get; private set; }

        public string Email { get; private set; }

        public string PasswordHash { get; private set; }

        public int CreatedBy { get; private set; }

        public DateTime CreatedAt { get; private set; }

        public int UpdatedBy { get; private set; }

        public int RoleId { get; private set; }
    }
}