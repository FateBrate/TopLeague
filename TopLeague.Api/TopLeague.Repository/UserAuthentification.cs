using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TopLeague.Core.Dto;
using TopLeague.Core.Models;
using TopLeague.Core.Options;

namespace TopLeague.Repository
{
    public class UserAuthentification : IUserAuthenticationRepository
    {
        private readonly UserManager<User> userManager;
        public readonly IMapper mapper;
        private readonly JwtConfig JwtConfig;
        private readonly IConfiguration _configuration;

        private User? user;
        public UserAuthentification(
            UserManager<User> userManager, IMapper mapper, JwtConfig jwtConfig, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            JwtConfig = jwtConfig;
            _configuration = configuration;
        }

        public async Task<IdentityResult> RegisterUserAsync(UserRegistration userRegistration)
        {
            var user = mapper.Map<User>(userRegistration);
            var result = await userManager.CreateAsync(user, userRegistration.Password);
            return result;
        }
        public async Task<bool> ValidateUserAsync(UserLogin userLogin)
        {
            this.user = await this.userManager.FindByNameAsync(userLogin.UserName);
            var result = this.user != null && await this.userManager.CheckPasswordAsync(this.user, userLogin.Password);
            return result;
        }
        public async Task<string> CreateTokenAsync()
        {
            var signingCredentials = GetSingingCredentials();
            var claims = await GetClaims();
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
            return new JwtSecurityTokenhandler.WriteToken(tokenOptions);

        }

        private object GenerateTokenOptions(SigningCredentials? signingCredentials, List<Claim> claims)
        {
            var tokenOptions = new JwtSecurityToken(
                issuer: this.JwtConfig.ValidIssuer,
               audinece: this.JwtConfig.ValidAudience,
               claims: claims,
               expires: DateTime.Now.AddMinutes(Convert.ToDouble(JwtConfig.ExpiresIn)),
               signingCredentials: signingCredentials);
            return tokenOptions;
        }

        private async Task<List<Claim>> GetClaims()
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name,this.user.UserName)
            };
            var roles = await this.userManager.GetRolesAsync(this.user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }

        private SigningCredentials? GetSingingCredentials()
        {
            if (this.JwtConfig?.Secret == null)
                return null;
            var key = Encoding.UTF8.GetBytes(this.JwtConfig.Secret);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

    }

}
