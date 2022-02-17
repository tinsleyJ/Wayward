package com.projectPlanner.controller;

import com.projectPlanner.entity.Project;
import com.projectPlanner.entity.Todo;
import com.projectPlanner.repository.ProjectRepository;
import com.projectPlanner.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    TodoRepository todoRepository;

    public ProjectController(ProjectRepository projectRepository, TodoRepository todoRepository) {
        this.projectRepository = projectRepository;
        this.todoRepository = todoRepository;
    }

    @PostMapping("/submitProjectDetails")
    public ResponseEntity<Project> submitProjectDetails(@RequestBody Project project) {
        project = projectRepository.save(project);
        return new ResponseEntity<>(project, HttpStatus.CREATED);
    }

    @PostMapping("/submitProjectTodo")
    public ResponseEntity<Todo> submitProjectTodo(@RequestBody Todo todo) {
        todo = todoRepository.save(todo);
        return new ResponseEntity<>(todo, HttpStatus.CREATED);
    }

    @GetMapping("/getAllProjects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/findByProjectName/{projectName}")
    public Iterable<Project> findProjectByName(@PathVariable String projectName) {
        return (projectRepository.findByProjectName(projectName));
    }

    @GetMapping("/findById/{id}")
    public Optional<Project> findById(@PathVariable Integer id) {
        return (projectRepository.findById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Integer id) {
        projectRepository.deleteById(id);
    }

    @PutMapping("/updateProjectDetailsById/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Integer id, @RequestBody Project project) {
        Project p = projectRepository.findById(id).get();
        if (p.getId() != 0) {
            p.setProjectName(project.getProjectName());
            p.setProjectDescription(project.getProjectDescription());
            p.setStartDate(project.getStartDate());
            p.setDeadline(project.getDeadline());
        }
        return new ResponseEntity<>(projectRepository.save(p), HttpStatus.OK);
    }


}

