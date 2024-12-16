package com.finddonor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.finddonor.entity.Organization;
import com.finddonor.repository.OrganizationRepository;
import com.finddonor.request.LoginRequest;
import com.finddonor.request.OrganizationRequest;

@Service
public class OrgainizationService {

    @Autowired
    private OrganizationRepository userRepository;
    
    public ResponseEntity<Organization> getLogin(LoginRequest login) {
        if(null == login){
            return null;
        }
        Organization organization = userRepository.findByUsernameAndPassword(login.getUsername(), login.getPassword());
        if(null == organization){
            System.out.println("User not found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(organization);
    }

    public ResponseEntity<String> saveUser(OrganizationRequest request) {
        if(null == request){
            System.out.println("User request is empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Request is empty");
        }
        if(userRepository.existsByUsernameAndPassword(request.getUsername(), request.getPassword())){
            System.out.println("User already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }
        Organization organization = Organization.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .organizationname(request.getOrganizationname())
                .mobile(request.getMobile())
                .city(request.getCity())
                .state(request.getState())
                .country(request.getCountry())
                .pincode(request.getPincode())
                .build();
        userRepository.save(organization);
        return ResponseEntity.ok("Organization created successfully");
    }
}
