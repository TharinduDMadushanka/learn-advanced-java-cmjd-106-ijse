package com.ijse.springintro.repository;

import com.ijse.springintro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // to find user by userName
    Optional<User> findByUsername(String username);

}
