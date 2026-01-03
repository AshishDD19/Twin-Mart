package in.ashish.dto;



import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UserRegisterDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Phone is required")
    @Pattern(	
        regexp = "^[6-9]\\d{9}$",
        message = "Invalid Indian phone number"
    )
    private String phone;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotNull(message = "DOB is required")
    private LocalDate dob;

    @NotBlank(message = "Location is required")
    private String location;

    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
}
