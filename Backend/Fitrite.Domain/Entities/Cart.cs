using System;
using System.Collections.Generic;
using System.Text;

namespace Fitrite.Domain.Entities
{
    public sealed class Cart
    {

        public int CartId { get; private set; }
        public int State { get; private set; }
        public int UserId { get; private set; }
        public int CreatedBy { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public int UpdatedBy { get; private set; }
        public Cart(int cartId, int state, int userId, int createdBy, DateTime createdAt, int updatedBy)
        {
            CartId = cartId;
            State = state;
            UserId = userId;
            CreatedBy = createdBy;
            CreatedAt = createdAt;
            UpdatedBy = updatedBy;
        }
    }
}
