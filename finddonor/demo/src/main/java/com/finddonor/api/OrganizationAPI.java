package com.finddonor.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finddonor.entity.Organization;
import com.finddonor.request.LoginRequest;
import com.finddonor.request.OrganizationRequest;
import com.finddonor.service.OrgainizationService;

@RestController
@RequestMapping("/organization")
public class OrganizationAPI {

    
    @Autowired
    private OrgainizationService userService;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Organization> getLogin(@RequestBody LoginRequest login) {
        return userService.getLogin(login);
    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<String> saveUser(@RequestBody OrganizationRequest request) {
        return userService.saveUser(request);
    }
}
