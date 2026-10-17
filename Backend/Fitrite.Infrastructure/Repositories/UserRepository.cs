using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using Fitrite.Application.Interfaces;
using Fitrite.Domain.Entities;
using Microsoft.Data.SqlClient;
namespace Fitrite.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        // Aqui ira la instancia de la base de datos y la implementacion de los metodos de la interfaz IUserRepository

        public async Task<User?> AddAsync(User user, CancellationToken cancellationToken)
        {

        }

    }
}
