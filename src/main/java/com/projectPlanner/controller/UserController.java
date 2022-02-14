package com.projectPlanner.controller;

import com.projectPlanner.entity.User;
import com.projectPlanner.repository.UserRepository;
import com.projectPlanner.service.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;
    SendMail sendMail;

    public UserController(UserRepository userRepository, SendMail sendMail) {
        this.userRepository = userRepository;
        this.sendMail = sendMail;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerNewUser(@RequestBody User user) {
        user = userRepository.save(user);
        sendMail.send(user.getEmail(), "Welcome!", "Thanks for signing up. " +
                "Now lets get some of those things done!");
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }


}
