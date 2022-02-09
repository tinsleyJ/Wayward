package com.projectPlanner.service;

import com.projectPlanner.entity.Project;
import com.projectPlanner.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    ProjectRepository projectRepository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public Iterable<Project> findByProjectName(String name) {
        return projectRepository.findByProjectName(name);
    }
}
