using AutoMapper;
using TopLeague.Core.Dto;
using TopLeague.Core.Models;

namespace TopLeague.Mapping
{
    public class AutoMapperProfile:Profile
    {
       public AutoMapperProfile()
       {
            this.CreateMap();
       }
        public void  CreateMap()
        {
            this.CreateMap<UserRegistration?, User?>();
        }
    }
}
