package com.projectPlanner.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;


import java.util.Properties;

@Configuration
@EnableJpaRepositories(basePackages = "com.projectPlanner.repository")
@EntityScan(basePackages = "com.projectPlanner.entity")
public class ApplicationConfig {

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername("jtspringtest@gmail.com");
        mailSender.setPassword("password387!");

        Properties props = mailSender.getJavaMailProperties(); // import from => java.util.Properties
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debut", "true");

        return mailSender;
    }
}
