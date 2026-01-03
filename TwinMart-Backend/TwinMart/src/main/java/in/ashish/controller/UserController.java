package in.ashish.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import in.ashish.dto.UpdateUserProfileDTO;
import in.ashish.dto.UserProfileDTO;
import in.ashish.service.UserService;
import in.ashish.util.ApiResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {
		
		@Autowired
	 	private  UserService userService;
	 

	    // GETbPROFILE
	    @GetMapping("/profile")
	    public ApiResponse<UserProfileDTO> getProfile() {

	        return new ApiResponse<>(
	                true,
	                "User profile fetched successfully",
	                userService.getProfile()
	        );
	    }

	    // UPDATE PROFILE
	    @PutMapping("/profile")
	    public ApiResponse<UserProfileDTO> updateProfile(
	            @Valid @RequestBody UpdateUserProfileDTO dto) {

	        return new ApiResponse<>(
	                true,
	                "Profile updated successfully",
	                userService.updateProfile(dto)
	        );
	    }
	}