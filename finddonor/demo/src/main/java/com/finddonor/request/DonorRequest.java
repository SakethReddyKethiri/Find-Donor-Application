package com.finddonor.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class DonorRequest {
    
    private String name;
    private String bloodGroup;
    private String email;
    private Long mobile;
    private String city;
    private String state;
    private String country;
    private Long pincode;
}
