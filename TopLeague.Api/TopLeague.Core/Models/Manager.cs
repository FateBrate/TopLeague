using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    internal class Manager:Person
    {
        public string Club { get; set; } //later fk from club

    }
}
