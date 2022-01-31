package com.projectPlanner.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projectPlanner.entity.Project;
import com.projectPlanner.service.ProjectService;

@CrossOrigin
@RestController
public class ProjectController {


    @Autowired
    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping(value = "/submitProjectDetails")
    public void submitProjectDetails(@RequestBody Project project) {
        projectService.save(project);
    }

    @GetMapping(value = "/getAllProjects")
    public ResponseEntity<List<Project>> getAllProjects() {
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }

    // 9 Jan Stopped- Get to find by name
    @GetMapping(value = "/findProjectByName")
    public ResponseEntity<Optional<Project>> findByName(String name) {
        return new ResponseEntity<>(projectService.findByProjectName(name), HttpStatus.OK);
    }

}

