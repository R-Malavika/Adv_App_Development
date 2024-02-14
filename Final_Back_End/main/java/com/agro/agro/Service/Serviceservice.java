package com.agro.agro.Service;

import com.agro.agro.dto.Servicedto;
import com.agro.agro.Entity.Serviceentity;
import com.agro.agro.mapper.Servicemapper;

import jakarta.transaction.Transactional;

import com.agro.agro.Repository.ServiceRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String name) {
        Serviceentity serviceentity = serviceRepo.findByName(name);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String name, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setMobile(updatedServicedto.getMobile());
            existingService.setBranch(updatedServicedto.getBranch());
            existingService.setScheme(updatedServicedto.getScheme());
            existingService.setAmount(updatedServicedto.getAmount());
            existingService.setPurpose(updatedServicedto.getPurpose());
            existingService.setPanNum(updatedServicedto.getPanNum());
            existingService.setSalary(updatedServicedto.getSalary());
            existingService.setAadharNo(updatedServicedto.getAadharNo());
            existingService.setAddress(updatedServicedto.getAddress());
            existingService.setDoctype(updatedServicedto.getDoctype());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
    
   @Transactional
    public String deleteServiceById(Long id) {
        if (serviceRepo.existsById(id)) {
            serviceRepo.deleteById(id);
            return "Deleted successfully!!!";
        } else {
            return "Data not found for ID: " + id;
        }
    }
}
