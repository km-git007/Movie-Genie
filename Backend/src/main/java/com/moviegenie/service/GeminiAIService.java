package com.moviegenie.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeminiAIService {
    private final RestTemplate restTemplate;
    
    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String apiKey;


public GeminiAIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

 public String getMovies(String userInput) {
        String url = UriComponentsBuilder.fromHttpUrl(geminiApiUrl)
                .queryParam("query", userInput)
                .queryParam("key", apiKey)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }

    public String getTVShows(String userInput) {
        String url = UriComponentsBuilder.fromHttpUrl(geminiApiUrl)
                .queryParam("query", userInput)
                .queryParam("key", apiKey)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
