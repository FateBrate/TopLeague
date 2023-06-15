using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Models
{
    public class League:BaseClass
    {
        public string LeagueName { get; set; }
        public string Country { get; set; }
        public int Divison { get; set; }
        public byte[]? Logo { get; set; }
    }
}
