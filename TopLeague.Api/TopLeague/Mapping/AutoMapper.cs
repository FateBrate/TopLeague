using AutoMapper;

namespace TopLeague.Mapping
{
    public class AutoMapper
    {
        public static IMapper CreateMapping()
        {
            var config = new MapperConfiguration(c =>
            {
                c.AddProfile<AutoMapperProfile>();
            });
            IMapper mapper=config.CreateMapper();
            return mapper;
        }
    }
}
