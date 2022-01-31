package com.projectPlanner.wayward;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.projectPlanner")
public class WaywardApplication {

    public static void main(String[] args) {
        SpringApplication.run(WaywardApplication.class, args);
    }

}
