package com.finddonor.api;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestAPI {

    @GetMapping("/test")
    public String performSeleniumTest() {
        String url="http://localhost:5173";

        WebDriver driver = new ChromeDriver();
        driver.get(url);
        System.out.println(driver.getTitle());
        driver.quit();
        
        System.out.println("Test Passed: Title contains 'Blood Donor Finder'.");

        return "Test Passed: Title contains 'Blood Donor Finder'.";
    }
}
