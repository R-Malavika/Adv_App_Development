package com.agro.agro.mapper;

import com.agro.agro.dto.Servicedto;
import com.agro.agro.Entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getEmail(),
                serviceentity.getMobile(),
                serviceentity.getBranch(),
                serviceentity.getScheme(),
                serviceentity.getAmount(),
                serviceentity.getPurpose(),
                serviceentity.getPanNum(),
                serviceentity.getSalary(),
                serviceentity.getAadharNo(),
                serviceentity.getAddress(),
                serviceentity.getDoctype()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
            servicedto.getId(),
            servicedto.getName(),
            servicedto.getEmail(),
            servicedto.getMobile(),
            servicedto.getBranch(),
            servicedto.getScheme(),
            servicedto.getAmount(),
            servicedto.getPurpose(),
            servicedto.getPanNum(),
            servicedto.getSalary(),
            servicedto.getAadharNo(),
            servicedto.getAddress(),
            servicedto.getDoctype()
        );
    }
}