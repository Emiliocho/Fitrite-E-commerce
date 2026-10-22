using Fitrite.Application.DTOs;
using Fitrite.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Application.Interfaces
{
    public interface IUserService
    {
        Task<User> RegisterAsync(RegisterUser register, CancellationToken cancellationToken);
    }
}
