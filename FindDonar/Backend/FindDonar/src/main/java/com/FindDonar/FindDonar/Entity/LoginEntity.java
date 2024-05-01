package com.FindDonar.FindDonar.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginEntity {
    @Id
    private String email;
    private String password;
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public LoginEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public LoginEntity() {
    }
    @Override
    public String toString() {
        return "LoginEntity [email=" + email + ", password=" + password + "]";
    }

}
