using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    public class Stadium
    {
        [Key]
        public int StadiumId { get; set; }
        public string StadiumName { get; set; }
        public int Capacity { get; set; }
        public string Location { get; set; }
        public string Country { get; set; }
        public int YearOpened { get; set; }
        public string Club { get; set; }//later fk from club
    }
}
