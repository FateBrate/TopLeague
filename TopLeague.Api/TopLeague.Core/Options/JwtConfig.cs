using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Options
{
    internal class JwtConfig
    {
        public string? ValidIssuer { get; set; }

        public string? ValidAudience { get; set; }

        public string? Secret { get; set; }
        public int ExpiresIn { get; set; }


    }
}
