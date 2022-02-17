package com.projectPlanner.controller;

import com.projectPlanner.entity.User;
import com.projectPlanner.repository.UserRepository;
import com.projectPlanner.service.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
                "Now lets get some things done!");
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<User>> login(@RequestBody User user) {
        Optional<User> dbUser = userRepository.findByEmail(user.getEmail());
        if (dbUser.isPresent()) {
            if (dbUser.get().getEmail().equals(user.getEmail())) {
                return new ResponseEntity<>(dbUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

