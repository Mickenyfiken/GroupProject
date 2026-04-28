using System;
using AutoMapper;
using SportsonBackendShell.Data.DTO.Manual;
using SportsonBackendShell.Data.Entities.Manual;

namespace SportsonBackendShell.Mapper;

public class ManualProfile : Profile
{
    public ManualProfile()
    {
        CreateMap<Manual, ManualDto>();
        CreateMap<ManualResource, ManualResourceDto>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt.ToString("o")));
    }
}