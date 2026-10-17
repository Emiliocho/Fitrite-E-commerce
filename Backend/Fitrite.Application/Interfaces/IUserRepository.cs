using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Fitrite.Domain.Entities;

namespace Fitrite.Application.Interfaces
{

    public interface IUserRepository
    {
        Task<User?> GetByIdAsync(int userId, CancellationToken cancellationToken);

        Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken);

        Task<IReadOnlyCollection<User>> GetAllAsync(CancellationToken cancellationToken);

        Task<User> AddAsync(User user, CancellationToken cancellationToken);

        Task UpdateAsync(User user, CancellationToken cancellationToken);

        Task<bool> DeactivateAsync(int userId, CancellationToken cancellationToken);
    }
}
