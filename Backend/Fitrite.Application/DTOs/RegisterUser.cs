using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Application.DTOs
{
    public sealed class RegisterUser
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
