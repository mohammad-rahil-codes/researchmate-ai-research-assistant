
package com.research.assistant;
import java.util.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.stream.Collectors;

/**
 * Handles exceptions centrally across the application's REST controllers.
 * This keeps error-handling logic separate from controller business logic.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles request validation failures triggered by @Valid.
     *
     * @param ex contains details about the validation errors
     * @return a 400 Bad Request response with a descriptive error message
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationException(
            MethodArgumentNotValidException ex) {

        // Extract the validation message from the first field error.
        // Collect all validation error messages.
        List<String> messages = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());
        // Build a consistent JSON response for the client.
        Map<String, Object> response = Map.of(
                "status", 400,
                "error", "Bad Request",
                "message", messages
        );

        // Return HTTP 400 to indicate that the request contains invalid data.
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);
    }


    /**
     * Handles requests that contain an unsupported operation.
     *
     * @param ex contains details about the invalid operation
     * @return a 400 Bad Request response with a descriptive message
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleIllegalArgumentException(
            IllegalArgumentException ex) {

        // Build a consistent error response for invalid operations.
        Map<String, Object> response = Map.of(
                "status", 400,
                "error", "Bad Request",
                "message", ex.getMessage()
        );

        // Return HTTP 400 to indicate that the request is invalid.
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);
    }



}
