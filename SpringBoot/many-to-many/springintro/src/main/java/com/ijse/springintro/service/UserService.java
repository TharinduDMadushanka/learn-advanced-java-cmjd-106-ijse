package com.ijse.springintro.service;

import com.ijse.springintro.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User createUser(User user);

}
