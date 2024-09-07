package com.ijse.springintro.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.util.Date;

@Configuration
public class JwtUtils {

    @Value("${app.secret}") // get secret key from application.properties
    private String secret;

    // GENERATE KEY with the secret
    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String generateJwtToke(Authentication authentication) {
        UserDetails user = (UserDetails) authentication.getPrincipal();

        //generate JWT Token from user details above
        return Jwts.builder().setSubject(user.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 1000 * 60 * 60 * 24))
                .signWith(key(), SignatureAlgorithm.HS256).compact();
    }

    // validate token
    public boolean validateJwtToken(String token) {

        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parse(token);
            return true;
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public String extractUsernameFromJwt(String token) {
        return Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody().getSubject(); // getting username
    }

}
