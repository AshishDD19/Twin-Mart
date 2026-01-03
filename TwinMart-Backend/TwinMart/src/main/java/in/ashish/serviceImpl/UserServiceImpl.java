package in.ashish.serviceImpl;

import in.ashish.dto.LoginRequestDTO;
import in.ashish.dto.LoginResponseDTO;
import in.ashish.dto.UpdateUserProfileDTO;
import in.ashish.dto.UserProfileDTO;
import in.ashish.dto.UserRegisterDTO;
import in.ashish.dto.UserResponseDTO;
import in.ashish.entity.Role;
import in.ashish.entity.User;
import in.ashish.exception.ResourceNotFoundException;
import in.ashish.repo.RoleRepository;
import in.ashish.repo.UserRepository;
import in.ashish.security.JwtUtil;
import in.ashish.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    // ================= REGISTER =================
    @Override
    public UserResponseDTO register(UserRegisterDTO registerDTO) {

        //  Check if email already exists
        if (userRepository.existsByEmail(registerDTO.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        // 2Fetch ROLE_USER from DB
        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() ->
                        new RuntimeException("ROLE_USER not found"));

        // Create User entity
        User user = new User();
        user.setName(registerDTO.getName());
        user.setEmail(registerDTO.getEmail());
        user.setPhone(registerDTO.getPhone());
        user.setDob(registerDTO.getDob());
        user.setLocation(registerDTO.getLocation());
        user.setPassword(
            passwordEncoder.encode(registerDTO.getPassword())
        );

        user.setRoles(Collections.singleton(userRole));

        // Save user
        User savedUser = userRepository.save(user);

        //  Return safe response DTO
        return new UserResponseDTO(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail()
        );
    }

    // ================= LOGIN =================
    @Override
    public LoginResponseDTO login(LoginRequestDTO loginDTO) {

        // Authenticate credentials
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginDTO.getEmail(),
                                loginDTO.getPassword()
                        )
                );

        //  Generate JWT token
        String token = jwtUtil.generateToken(loginDTO.getEmail());

        // Return token
        return new LoginResponseDTO(token, loginDTO.getEmail());
    }
    
    
    private String getLoggedInEmail() {

        Object principal =
                SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getPrincipal();

        if (principal instanceof UserDetails userDetails) {
            return userDetails.getUsername(); // email
        }

        throw new RuntimeException("Unauthorized");
    }

    
 // ================= Profile =================
	@Override
	public UserProfileDTO getProfile() {
		// TODO Auto-generated method stub
	    String email = getLoggedInEmail();

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() ->
	                new ResourceNotFoundException("User not found"));

	    return new UserProfileDTO(
	            user.getName(),
	            user.getEmail(),
	            user.getPhone(),
	            user.getDob(),
	            user.getLocation()
	    );
	}

	// ================= Update =================
	@Override
	public UserProfileDTO updateProfile(UpdateUserProfileDTO dto) {
		// TODO Auto-generated method stub
	    String email = getLoggedInEmail();

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() ->
	                new ResourceNotFoundException("User not found"));

	    user.setName(dto.getName());
	    user.setPhone(dto.getPhone());
	    user.setLocation(dto.getLocation());

	    User updatedUser = userRepository.save(user);

	    return new UserProfileDTO(
	            updatedUser.getName(),
	            updatedUser.getEmail(),
	            updatedUser.getPhone(),
	            updatedUser.getDob(),
	            updatedUser.getLocation()
	    );
	}
}

