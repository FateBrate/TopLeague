using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TopLeague.Core.Dto;
using TopLeague.Repository;

namespace TopLeague.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ILogger<AuthController> logger;
        private readonly IUserAuthenticationRepository userAuthenticationRepository;

        public AuthController(IMapper mapper, ILogger<AuthController> logger, IUserAuthenticationRepository userAuthenticationRepository)
        {
            this.mapper = mapper;
            this.logger = logger;
            this.userAuthenticationRepository = userAuthenticationRepository;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegistration userRegistration)
        {
            var userResult=await this.userAuthenticationRepository.RegisterUserAsync(userRegistration);
            if(!userResult.Succeeded)
            {
                return this.BadRequest(userResult);
            }
            return this.StatusCode(201);
        }
        [HttpPost("login")]

        public async Task<IActionResult> Authenticate([FromBody] UserLogin userLogin)
        {
            return !await this.userAuthenticationRepository.
                ValidateUserAsync(userLogin) ? Unauthorized() : Ok(new
                {
                    Token = await this.userAuthenticationRepository.CreateTokenAsync()
                });
        }
    }
}
