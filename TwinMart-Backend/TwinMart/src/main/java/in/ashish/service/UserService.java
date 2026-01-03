package in.ashish.service;

import in.ashish.dto.LoginRequestDTO;
import in.ashish.dto.LoginResponseDTO;
import in.ashish.dto.UpdateUserProfileDTO;
import in.ashish.dto.UserProfileDTO;
import in.ashish.dto.UserRegisterDTO;
import in.ashish.dto.UserResponseDTO;

public interface UserService {

    UserResponseDTO register(UserRegisterDTO registerDTO);

    LoginResponseDTO login(LoginRequestDTO loginDTO);
    
    UserProfileDTO getProfile();

    UserProfileDTO updateProfile(UpdateUserProfileDTO dto);
}
