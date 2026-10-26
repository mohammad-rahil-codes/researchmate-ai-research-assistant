package com.research.assistant;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/research")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class ResearchController {
    private final ResearchService researchService;

    @PostMapping("/process")
    public ResponseEntity<String> processContent(
            @Valid @RequestBody ResearchRequest request) {

            // Process the request using the service layer.
            String result = researchService.processContent(request);

            // Return HTTP 200 OK with the result when processing succeeds.
            return ResponseEntity.ok(result);
    }
}
