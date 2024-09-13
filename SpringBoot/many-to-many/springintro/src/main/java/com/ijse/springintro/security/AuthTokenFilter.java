package com.ijse.springintro.security;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthTokenFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils; // Inject JwtUtils for token validation and extraction

    // Extract JWT from the Authorization header
    private String parseJwtFromHeader(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7); // Remove "Bearer " prefix to get the token
        } else {
            return null; // No token found
        }
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws IOException, ServletException {

        try {
            // Extract JWT from the header
            String jwtToken = parseJwtFromHeader(request);

            // Validate the token and set authentication if valid
            if (jwtToken != null && jwtUtils.validateJwtToken(jwtToken)) {
                String username = jwtUtils.extractUsernameFromJwt(jwtToken); // Extract username from token
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username,
                        null, null); // Create authentication token with username (no credentials or authorities)

                // Set details for the authentication
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // Set the authentication in the security context
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Handle exceptions during filtering
        }

        // Continue the filter chain
        filterChain.doFilter(request, response);
    }
}
