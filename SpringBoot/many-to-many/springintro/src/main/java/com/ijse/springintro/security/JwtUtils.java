package com.ijse.springintro.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.security.Key;

@Configuration
public class JwtUtils {

    @Value("${app.secret}") // get secret key from application.properties
    private String secret;

    private Key key(){

    }

}
