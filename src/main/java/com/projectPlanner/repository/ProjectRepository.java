package com.projectPlanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.projectPlanner.entity.Project;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

    Iterable<Project> findByProjectName(String projectName);

    Optional<Project> findById(Integer id);

    void deleteById(Integer id);
}
