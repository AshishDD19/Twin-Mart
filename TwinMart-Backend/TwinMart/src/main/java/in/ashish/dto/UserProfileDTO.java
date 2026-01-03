package in.ashish.dto;



import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class UserProfileDTO {

    private String name;
    private String email;
    private String phone;
    private LocalDate dob;
    private String location;
}
