using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopLeague.Core.Options
{
    public class ApplicationSettings
    {
       public JwtConfig jwtConfig { get; set; } = new JwtConfig();
    }
}
