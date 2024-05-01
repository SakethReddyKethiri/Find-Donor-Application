package com.FindDonar.FindDonar.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegisterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String bloodgrp;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String mobile;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getBloodgrp() {
        return bloodgrp;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getMobile() {
        return mobile;
    }
    public String getCity() {
        return city;
    }
    public String getState() {
        return state;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setBloodgrp(String bloodgrp) {
        this.bloodgrp = bloodgrp;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setState(String state) {
        this.state = state;
    }
    public RegisterEntity() {
    }
    
    public RegisterEntity(long id, String name, String bloodgrp, String email, String password, String mobile,
            String city, String state) {
        this.id = id;
        this.name = name;
        this.bloodgrp = bloodgrp;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.city = city;
        this.state = state;
    }
    @Override
    public String toString() {
        return "RegisterEntity [id=" + id + ", name=" + name + ", bloodgrp=" + bloodgrp + ", email=" + email
                + ", password=" + password + ", mobile=" + mobile + ", city=" + city + ", state=" + state + "]";
    }
    

}
