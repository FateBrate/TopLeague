using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    public class Player:Person
    {
        public int Height { get; set; }
        public int Weight { get; set; }
        public string Position { get; set; }
        public string Club { get; set; } //later fk from club
        public int JerseyNumber { get; set; }
        public byte[] Logo { get; set; }

    }
}
