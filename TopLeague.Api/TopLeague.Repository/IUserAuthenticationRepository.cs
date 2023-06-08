

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using TopLeague.Core.Dto;

namespace TopLeague.Repository
{
    public interface IUserAuthenticationRepository
    {
        Task<IdentityResult> RegisterUserAsync(UserRegistration userRegistration);
        Task<bool> ValidateUserAsync(UserLogin userLogin);
        Task<string> CreateTokenAsync();
    }
}
