using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    internal class Referee:Person
    {
        public string League { get; set; }//later fk from League
    }
}
