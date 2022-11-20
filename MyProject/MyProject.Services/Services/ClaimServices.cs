﻿using AutoMapper;
using MyProject.Common.DTOs;
using MyProject.Repositories.Entities;
using MyProject.Repositories.Interfaces;
using MyProject.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyProject.Services.Services
{
    class ClaimServices:IClaimServise
    {
        private readonly IClaimRepository _claimRepository;
        private readonly IMapper _mapper;
        public ClaimServices(IClaimRepository claimRepository, IMapper mapper)
        {
            _claimRepository = claimRepository;
            _mapper = mapper;
        }
        public ClaimDTO GetById(int id)
        {
            return _mapper.Map<ClaimDTO>(_claimRepository.GetById(id));
        }
        public List<ClaimDTO> GetList()
        {
            return _mapper.Map<List<ClaimDTO>>(_claimRepository.GetAll());
        }
    }
}
