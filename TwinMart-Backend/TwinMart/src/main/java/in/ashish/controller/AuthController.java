package in.ashish.controller;


import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import in.ashish.dto.LoginRequestDTO;
import in.ashish.dto.LoginResponseDTO;
import in.ashish.dto.UserRegisterDTO;
import in.ashish.dto.UserResponseDTO;
import in.ashish.service.UserService;
import in.ashish.util.ApiResponse;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

	 @Autowired
	    private UserService userService;

    // ================= REGISTER =================
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserResponseDTO>> register(
            @Valid @RequestBody UserRegisterDTO registerDTO) {

        UserResponseDTO user =
                userService.register(registerDTO);

        ApiResponse<UserResponseDTO> response =
                new ApiResponse<>(
                        true,
                        "User registered successfully",
                        user
                );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // ================= LOGIN =================
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponseDTO>> login(
            @Valid @RequestBody LoginRequestDTO loginDTO) {

        LoginResponseDTO loginResponse =
                userService.login(loginDTO);

        ApiResponse<LoginResponseDTO> response =
                new ApiResponse<>(
                        true,
                        "Login successful",
                        loginResponse
                );

        return ResponseEntity.ok(response);
    }
}
