package com.ijse.springintro.service;

import com.ijse.springintro.entity.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
    //what do we except to do with tasks
    List<Task> getTasksList();//Reading
    Task createTask(Task task);//Creating
    Task getTaskById(Long id);// finding the Task by its primary key
    Task updateTask(long id, Task task); // find task and update
    void deleteTask(long id);  // delete task
}
