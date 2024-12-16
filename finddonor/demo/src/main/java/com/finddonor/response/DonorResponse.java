package com.finddonor.response;

import java.util.List;

import com.finddonor.request.DonorRequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class DonorResponse {
    
    private List<DonorRequest> donars;

    public void addDonar(DonorRequest donar) {
        if(donars == null) donars = new java.util.ArrayList<>();
        donars.add(donar);
    }

    public void addDonars(List<DonorRequest> donars) {
        if(this.donars == null) this.donars = new java.util.ArrayList<>();
        this.donars.addAll(donars);
    }
}
