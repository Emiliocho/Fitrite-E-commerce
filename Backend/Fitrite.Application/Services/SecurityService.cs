using System;
using System.Collections.Generic;
using System.Text;
using Fitrite.Application.Interfaces;
using BCrypt.Net;

namespace Fitrite.Application.Services
{
    public class SecurityService : ISecurityService
    {

        public string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        public bool VerifyPassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
