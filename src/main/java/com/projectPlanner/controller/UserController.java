package com.projectPlanner.controller;

import com.projectPlanner.entity.User;
import com.projectPlanner.repository.UserRepository;
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

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerNewUser(@RequestBody User user) {
        user = userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

}
