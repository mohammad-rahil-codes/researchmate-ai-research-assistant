package com.research.assistant;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

    @Data
    public class ResearchRequest {

        @NotBlank(message = "Content cannot be empty")
        private String content;

        @NotBlank(message = "Operation cannot be empty")
        private String operation;
    }