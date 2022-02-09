package com.projectPlanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.projectPlanner.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

    Iterable<Project> findByProjectName(String name);
}
