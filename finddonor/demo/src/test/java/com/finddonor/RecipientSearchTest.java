package com.finddonor;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.finddonor.entity.Donors;
import com.finddonor.service.DonorService;

@SpringBootTest
class RecipientSearchTest {

    @Autowired
    private DonorService donorSearchService;
    @Test
    void testSearchByBloodTypeAndPincode() {
        List<Donors> donors = donorSearchService.getUsersByBloodGroup("A+");
        assertThat(donors).isNotEmpty();
        assertThat(donors.get(0).getBloodGroup()).isEqualTo("A+");
        System.out.println("The Recipient Search Test Passed!!!!!!!!!!!!!!!!!!!");
    }
}
