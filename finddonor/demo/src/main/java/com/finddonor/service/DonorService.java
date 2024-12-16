package com.finddonor.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finddonor.entity.Donors;
import com.finddonor.repository.DonorRepository;
import com.finddonor.request.DonorRequest;
import com.finddonor.request.SMSRequest;
import com.finddonor.response.DonorResponse;


@Service
public class DonorService {
    
    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    private SMSService smsService;


    
    public String saveDataForm(DonorRequest request) {
        String email=request.getEmail();
        String name=request.getName();

        if(donorRepository.existsByEmailAndName(email, name)){
            return null;
        }

        Donors register=Donors.builder()
            .name(request.getName())
            .email(request.getEmail())
            .bloodGroup(request.getBloodGroup())
            .mobile(request.getMobile())
            .city(request.getCity())
            .state(request.getState())
            .country(request.getCountry())
            .pincode(request.getPincode())
            .build();
        
        donorRepository.save(register);
        return "Registration Successful";
    }


    public List<Donors> getUsersByBloodGroup(String bloodGroup) {
        
        return donorRepository.findByBloodGroup(bloodGroup);
    }

    public DonorResponse findNearestDonors(SMSRequest smsRequest) {
        // First find donors with matching blood group
        List<Donors> matchingDonors = donorRepository.findByBloodGroup(smsRequest.getBloodGroup());
        
        // Sort donors based on pincode proximity
        List<Donors> nearestDonors = matchingDonors.stream()
                .sorted((donor1, donor2) -> {
                    long diff1 = Math.abs(donor1.getPincode() - smsRequest.getPinCode());
                    long diff2 = Math.abs(donor2.getPincode() - smsRequest.getPinCode());
                    return Long.compare(diff1, diff2);
                })
                .limit(10)
                .collect(Collectors.toList());

        DonorResponse response = DonorResponse.builder().build();

        for (Donors donor : nearestDonors) {
            DonorRequest donar = DonorRequest.builder()
                    .name(donor.getName())
                    .bloodGroup(donor.getBloodGroup())
                    .email(donor.getEmail())
                    .mobile(donor.getMobile())
                    .city(donor.getCity())
                    .state(donor.getState())
                    .country(donor.getCountry())
                    .pincode(donor.getPincode())
                    .build();

            response.addDonar(donar);
        }

        smsService.sendSMS(response,smsRequest);

        return response;
    }
}



