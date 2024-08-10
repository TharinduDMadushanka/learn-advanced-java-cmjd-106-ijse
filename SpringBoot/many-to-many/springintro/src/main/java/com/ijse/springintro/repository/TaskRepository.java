package com.ijse.springintro.repository;

import com.ijse.springintro.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    //custom queries can be defined here
}
