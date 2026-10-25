using Fitrite.Domain.Entities;
using System.Text;
using Fitrite.Application.DTOs;
using Fitrite.Application.Interfaces;

namespace Fitrite.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public readonly ISecurityService _securityService;

        public UserService(IUserRepository userRepository, ISecurityService securityService)
        {
            _userRepository = userRepository;
            _securityService = securityService;
        }

        public async Task<User> RegisterAsync(RegisterUser register, CancellationToken cancellationToken)
        {
            var existingUser = await _userRepository.GetByEmailAsync(register.Email, cancellationToken);

            if (existingUser != null)
            {
                throw new InvalidOperationException(
                    "Email is already registered.");
            }

            var hashedPassword = _securityService.HashPassword(register.Password);

            var newUser = new User(
                register.Email,
                hashedPassword,
                4,
                1,
                DateTime.UtcNow,
                1
            );

            return await _userRepository.AddAsync(
                newUser,
                cancellationToken);
        }

        public async Task<User> LoginUserAsync(LoginUser login, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByEmailAsync(
    login.Email,
    cancellationToken);

            if (user == null)
            {
                throw new InvalidOperationException(
                    "Correo o contraseña incorrectos.");
            }

            Console.WriteLine($"UserId: {user.UserId}");
            Console.WriteLine($"Email: {user.Email}");
            Console.WriteLine($"PasswordHash: {user.PasswordHash}");
            Console.WriteLine($"RoleId: {user.RoleId}");
            return user;
        }
    }
}
