package com.finddonor.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Builder

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationRequest {
    
    private String username;
    private String password;
    private String organizationname;
    private long mobile;
    private String city;
    private String state;
    private String country;
    private Long pincode;
}
