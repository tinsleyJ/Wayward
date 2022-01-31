package com.projectPlanner.service;

import com.projectPlanner.entity.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {

    void save(Project project);

    List<Project> getAllProjects();

    Optional<Project> findByProjectName(String name);
}
