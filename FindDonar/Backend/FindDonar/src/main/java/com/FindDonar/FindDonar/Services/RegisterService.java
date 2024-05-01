package com.FindDonar.FindDonar.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FindDonar.FindDonar.Entity.RegisterEntity;
import com.FindDonar.FindDonar.Jparepository.RegisterJparepo;

import lombok.NonNull;


@Service
public class RegisterService {
    
    @Autowired
    private RegisterJparepo registerrepo;

    
    public String saveDataForm(@NonNull RegisterEntity register){
        String email=register.getEmail();
        String password=register.getPassword();

        if(registerrepo.existsByEmailAndPassword(email, password)){
            return "Email and password combination already exist!!!\nTRY Another email or password";
        }
        registerrepo.save(register);
        return "Registration Successful";
    }


    public List<RegisterEntity> getUsersByBloodGroup(String bloodGroup) {
        
        return registerrepo.findByBloodgrp(bloodGroup);
    }
}