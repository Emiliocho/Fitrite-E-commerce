using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Fitrite.Application.Interfaces
{
    public interface IDbConnectionFactory
    {
        IDbConnection CreateConnection();
    }
}
