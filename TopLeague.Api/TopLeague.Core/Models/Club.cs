using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    public class Club:BaseClass
    {
        public string ClubName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }       
        public int FoundedYear { get; set; }    
        public string League { get; set; }//later fk from League
        public byte[] Logo { get; set; }

    }
}
