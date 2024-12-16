package com.finddonor;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.finddonor.request.DonorRequest;
import com.finddonor.service.DonorService;

@SpringBootTest
class JUnitTest {

    @Autowired
    private DonorService donorService;
    @Test
    void testValidDonorRegistration() {
        DonorRequest validDonor = new DonorRequest("John", "A+", "12345", 1237890L, "Hyderabad", "Telangana", "India", 500001L);
        String savedDonor = donorService.saveDataForm(validDonor);
        assertThat(savedDonor).isNotNull();
    }
}

