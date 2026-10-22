using Fitrite.Domain.Entities;
using System.Text;
using Fitrite.Application.DTOs;
using Fitrite.Application.Interfaces;

namespace Fitrite.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> CreateAsync(RegisterUser register, CancellationToken cancellationToken)
        {
             byte[] passwordHash = Encoding.UTF8.GetBytes(register.Password);

            var user = new User
                (
                    email: register.Email,
                    password: passwordHash,
                    created_by: 1,
                    created_at: DateTime.UtcNow,
                    updated_by: 1,
                    role_id: 4
                );

            return await _userRepository.AddAsync(user, cancellationToken);
        }
    }
}
