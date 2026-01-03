package in.ashish.exception;

import org.springframework.http.*;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import in.ashish.util.ApiResponse;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

	// ================= RESOURCE NOT FOUND =================
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse<Object>> handleNotFound(ResourceNotFoundException ex) {

		ApiResponse<Object> response = new ApiResponse<>(false, ex.getMessage(), null);

		return new ResponseEntity<>(response, HttpStatus.NOT_FOUND); //404
	}

	// ================= BAD REQUEST =================
	@ExceptionHandler(BadRequestException.class)
	public ResponseEntity<ApiResponse<Object>> handleBadRequest(BadRequestException ex) {

		ApiResponse<Object> response = new ApiResponse<>(false, ex.getMessage(), null);

		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);//400
	}

	// ================= VALIDATION ERRORS =================
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiResponse<Map<String, String>>> handleValidation(MethodArgumentNotValidException ex) {

		Map<String, String> errors = new HashMap<>();

		ex.getBindingResult().getFieldErrors()
				.forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));

		ApiResponse<Map<String, String>> response = new ApiResponse<>(false, "Validation failed", errors);

		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);//400
	}

	// ================= INVALID LOGIN =================
	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<ApiResponse<Object>> handleBadCredentials(BadCredentialsException ex) {

		ApiResponse<Object> response = new ApiResponse<>(false, "Invalid email or password", null);

		return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);//401
	}

	// ================= FALLBACK =================
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ApiResponse<Object>> handleAll(Exception ex) {

		ApiResponse<Object> response = new ApiResponse<>(false, "Something went wrong", null);

		return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);//500
	}
}
