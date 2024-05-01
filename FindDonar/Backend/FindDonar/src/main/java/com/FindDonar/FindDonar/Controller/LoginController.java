package com.FindDonar.FindDonar.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.FindDonar.FindDonar.Entity.LoginEntity;
import com.FindDonar.FindDonar.Entity.RegisterEntity;
import com.FindDonar.FindDonar.Jparepository.RegisterJparepo;

@RestController
public class LoginController {
    @Autowired
    RegisterJparepo registerJpaRepo;

    @CrossOrigin
    @PostMapping("/donar/login")
    public ResponseEntity<?> getUserDetailsByEmailAndPassword(@RequestBody LoginEntity login) {
        RegisterEntity user =registerJpaRepo.findByEmailAndPassword(login.getEmail(),login.getPassword());

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
