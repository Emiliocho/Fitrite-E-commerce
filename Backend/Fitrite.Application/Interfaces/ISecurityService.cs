using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Application.Interfaces
{
    public interface ISecurityService
    {
         string HashPassword(string password);
         bool VerifyPassword(string password, string hashedPassword);
    }
}
