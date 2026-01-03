package in.ashish.dto;



import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UpdateUserProfileDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @Pattern(
        regexp = "^[6-9]\\d{9}$",
        message = "Invalid Indian phone number"
    )
    private String phone;

    @NotBlank(message = "Location is required")
    private String location;
}
