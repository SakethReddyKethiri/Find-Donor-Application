package com.FindDonar.FindDonar.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.FindDonar.FindDonar.Entity.RegisterEntity;
import com.FindDonar.FindDonar.Services.RegisterService;

@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerservice;
    
    @CrossOrigin
    @PostMapping("/donar")
    public String saveData(@RequestBody RegisterEntity register){

        return registerservice.saveDataForm(register);
    }

    @CrossOrigin
    @GetMapping("/donar/bloodgrp/{bloodgrp}")
    public List<RegisterEntity> getUsersByBloodGroup(@PathVariable String bloodgrp) {
        return registerservice.getUsersByBloodGroup(bloodgrp);
    }

}
