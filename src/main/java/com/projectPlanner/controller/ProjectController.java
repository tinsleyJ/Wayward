package com.projectPlanner.controller;

import com.projectPlanner.entity.Project;
import com.projectPlanner.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @PostMapping("/submitProjectDetails")
    public ResponseEntity<Project> submitProjectDetails(@RequestBody Project project) {
        project = projectRepository.save(project);
        return new ResponseEntity<>(project, HttpStatus.CREATED);
    }

    @GetMapping("/getAllProjects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/findProjectByName/{name}")
    public Iterable<Project> findProjectByName(@PathVariable String name) {
        return (projectRepository.findByProjectName(name));
    }

}

