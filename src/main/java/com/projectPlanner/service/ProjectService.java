package com.projectPlanner.service;

import com.projectPlanner.entity.Project;

public interface ProjectService {

    Iterable<Project> findByProjectName(String name);
}
