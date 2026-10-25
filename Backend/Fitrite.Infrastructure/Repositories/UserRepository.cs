using Dapper;
using Fitrite.Application.DTOs;
using Fitrite.Application.Interfaces;
using Fitrite.Domain.Entities;
using System.Data;
using System.Diagnostics;
using Fitrite.Infrastructure.Persistence.Models;

namespace Fitrite.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;

        public UserRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }

        public async Task<User> AddAsync(User user, CancellationToken cancellationToken)
        {
            using var connection = _dbConnectionFactory.CreateConnection();

            Debug.WriteLine(connection.Database);

            return await connection.QuerySingleAsync<User>(
                "SEGURIDAD.USP_REGISTRAR_USUARIO",
                new
                {
                    i_correo = user.Email,
                    i_password = user.PasswordHash,
                    i_rolId = user.RoleId
                },
                commandType: CommandType.StoredProcedure
            );
        }

        public async Task<User?> GetByEmailAsync(
    string email,
    CancellationToken cancellationToken)
        {
            using var connection =
                _dbConnectionFactory.CreateConnection();

            var userDb = await connection
                .QuerySingleOrDefaultAsync<UserDb>(
                    "SEGURIDAD.USP_GetUserByEmail",
                    new { i_correo = email },
                    commandType: CommandType.StoredProcedure);

            if (userDb == null)
                return null;

            return new User(
                userDb.UserId,
                userDb.Email,
                userDb.PasswordHash,
                userDb.RoleId,
                userDb.CreatedBy,
                userDb.CreatedAt,
                userDb.UpdatedBy
            );
        }
    }
}
