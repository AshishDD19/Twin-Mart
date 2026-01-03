package in.ashish.security;



import jakarta.servlet.*;
import jakarta.servlet.http.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

		@Autowired
	    private JwtUtil jwtUtil;

	    @Autowired
	    private CustomUserDetailsService userDetailsService;

	    @Override
	    protected void doFilterInternal(
	            HttpServletRequest request,
	            HttpServletResponse response,
	            FilterChain filterChain)
	            throws ServletException, IOException {

	        String authHeader = request.getHeader("Authorization");

	        // 1️⃣ If no Authorization header → skip JWT logic
	        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
	            filterChain.doFilter(request, response);
	            return;
	        }

	        String token = authHeader.substring(7);

	        // 2️⃣ If token is empty or invalid format → skip
	        if (token.isBlank() || !token.contains(".")) {
	            filterChain.doFilter(request, response);
	            return;
	        }

	        try {
	            String email = jwtUtil.extractEmail(token);
	            System.out.println(email); 

	            if (email != null &&
	                SecurityContextHolder.getContext().getAuthentication() == null) {

	                UserDetails userDetails =
	                        userDetailsService.loadUserByUsername(email);

	                UsernamePasswordAuthenticationToken authToken =
	                        new UsernamePasswordAuthenticationToken(
	                                userDetails,
	                                null,
	                                userDetails.getAuthorities()
	                        );

	                authToken.setDetails(
	                        new WebAuthenticationDetailsSource().buildDetails(request)
	                );

	                SecurityContextHolder.getContext().setAuthentication(authToken);
	            }

	        } catch (Exception e) {
	          
	            filterChain.doFilter(request, response);
	            return;
	        }

	        filterChain.doFilter(request, response);
	    }

}
