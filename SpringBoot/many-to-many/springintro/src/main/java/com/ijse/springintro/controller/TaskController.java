package com.ijse.springintro.controller;

import com.ijse.springintro.dto.ResponseDto;
import com.ijse.springintro.entity.Task;
import com.ijse.springintro.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.util.List;

@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public ResponseEntity <List<Task>> getAllTasks() {
        List<Task> taskList = taskService.getTasksList();

        return ResponseEntity.status(200).body(taskList);
    }

    @PostMapping("tasks")
    public ResponseEntity <String> createTask(@RequestBody Task task){

        if(task.getTaskName() == null || task.getTaskName().isEmpty()){
            //return error message
            return ResponseEntity.status(400).body("Please enter a valid task name");
        }

        if(task.getPriority() == null){
            //return error message
            return ResponseEntity.status(400).body("Please enter a valid priority");
        }

        taskService.createTask(task);
        return ResponseEntity.status(200).body("Task created");
    }

    @GetMapping("/tasks/{taskId}")// added path variable to fetch id from client id
    public ResponseEntity <Task> getTaskById(@PathVariable Long taskId){
        Task task = taskService.getTaskById(taskId);

        if(task == null){
            return ResponseEntity.status(404).body(null);
        }else {
            return ResponseEntity.status(200).body(task);
        }
    }

    @PutMapping("/tasks/{taskId}")
    public ResponseEntity<Task> updateTask(@PathVariable Long taskId, @RequestBody Task task){
        Task updatedTask = taskService.updateTask(taskId, task);

        if(updatedTask == null){
            return ResponseEntity.status(404).body(null);
        }else {
            return ResponseEntity.status(200).body(updatedTask);
        }
    }

    @DeleteMapping("tasks/{taskId}")
    public void deleteTask(@PathVariable long taskId) {
        taskService.deleteTask(taskId);
    }
}

//@GetMapping("/tasks")
//public ResponseEntity<ResponseDto<List<Task>>> getAllTasks() {
//    List<Task> taskList = taskService.getTasksList();
//
//    return ResponseEntity.status(200).body(new ResponseDto<>());
//}