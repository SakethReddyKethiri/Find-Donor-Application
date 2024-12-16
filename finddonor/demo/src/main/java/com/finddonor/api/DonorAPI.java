package com.finddonor.api;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finddonor.request.DonorRequest;
import com.finddonor.request.SMSRequest;
import com.finddonor.response.DonorResponse;
import com.finddonor.service.DonorService;




@RestController
@RequestMapping("/donor")
public class DonorAPI {

    @Autowired
    private DonorService donorService;
    
    @CrossOrigin
    @PostMapping
    public ResponseEntity<String> saveData(@RequestBody DonorRequest request) {
        System.out.println(request);
        String response=donorService.saveDataForm(request);
        if(null == response){
            return ResponseEntity.badRequest().body("donor already exists");
        }
        return ResponseEntity.ok(response);
    }

    @CrossOrigin
    @PostMapping("/send")
    public DonorResponse getNearestBlooddonors(@RequestBody SMSRequest request) {
        return donorService.findNearestDonors(request);
    }
}


