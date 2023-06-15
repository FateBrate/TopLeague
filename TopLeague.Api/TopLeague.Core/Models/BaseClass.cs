using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    public abstract class BaseClass
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }

        public DateTime ModiffiedAt { get; set; }

        public bool IsDeleted { get; set; }
    }
}
