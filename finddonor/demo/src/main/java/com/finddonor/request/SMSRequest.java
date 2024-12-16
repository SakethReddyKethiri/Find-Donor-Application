package com.finddonor.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SMSRequest {
    
    private String bloodGroup;
    private String unitsNeeded;
    private String patientName;
    private String contactPerson;
    private String contactNumber;
    private String urgencyLevel;
    private String hospitalName;
    private String hospitalAddress;
    private long pinCode;
}

