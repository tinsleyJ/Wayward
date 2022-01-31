package com.projectPlanner.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;

@Controller
@EnableJpaRepositories(basePackages = "com.projectPlanner.repository")
@EntityScan(basePackages = "com.projectPlanner.entity")
public class ApplicationConfig {


}
