package com.projectPlanner.service;

import com.projectPlanner.entity.Project;
import com.projectPlanner.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void save(Project project) {
        projectRepository.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        return projects;
    }

    @Override
    public Optional<Project> findByProjectName(String name) {
        Optional<Project> project = projectRepository.findByProjectName(name);
        return project;
    }
}
