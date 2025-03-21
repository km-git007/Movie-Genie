package com.example.movieapi.controller;

import com.example.movieapi.dto.MovieResponse;
import com.example.movieapi.service.TMDBService;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Refill;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.time.Duration;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final TMDBService tmdbService;
    private Bucket bucket;

    public MovieController(TMDBService tmdbService) {
        this.tmdbService = tmdbService;
    }

    @PostConstruct
    public void initializeBucket() {
        Bandwidth limit = Bandwidth.classic(10, Refill.greedy(10, Duration.ofMinutes(1)));
        this.bucket = Bucket.builder().addLimit(limit).build();
    }

    /**
     * Fetch movies by category (e.g., popular, top_rated, upcoming)
     */
    @GetMapping("/{category}")
    public ResponseEntity<MovieResponse> getMoviesByCategory(
            @PathVariable String category,
            @RequestParam(defaultValue = "1") int page) {

        if (bucket.tryConsume(1)) {
            return ResponseEntity.ok(tmdbService.fetchMovies(category, page));
        } else {
            return ResponseEntity.status(429).body(null); // Too Many Requests
        }
    }

    /**
     * Fetch trending movies or TV shows (daily or weekly)
     */
    @GetMapping("/trending/{mediaType}")
    public ResponseEntity<MovieResponse> getTrending(
            @PathVariable String mediaType,  // "movie" or "tv"
            @RequestParam(defaultValue = "day") String timeWindow) {  // "day" or "week"

        if (bucket.tryConsume(1)) {
            return ResponseEntity.ok(tmdbService.fetchTrending(mediaType, timeWindow));
        } else {
            return ResponseEntity.status(429).body(null);
        }
    }

    /**
     * Search for movies by name
     */
    @GetMapping("/search")
    public ResponseEntity<MovieResponse> searchMovies(@RequestParam String query) {
        if (bucket.tryConsume(1)) {
            return ResponseEntity.ok(tmdbService.searchMovies(query));
        } else {
            return ResponseEntity.status(429).body(null);
        }
    }

    /**
     * Get movie details by ID
     */
    @GetMapping("/details/{movieId}")
    public ResponseEntity<?> getMovieDetails(@PathVariable Long movieId) {
        if (bucket.tryConsume(1)) {
            return ResponseEntity.ok(tmdbService.getMovieDetails(movieId));
        } else {
            return ResponseEntity.status(429).body(null);
        }
    }

    /**
     * Get TV show details by ID
     */
    @GetMapping("/tv/details/{tvId}")
    public ResponseEntity<?> getTvDetails(@PathVariable Long tvId) {
        if (bucket.tryConsume(1)) {
            return ResponseEntity.ok(tmdbService.getTvDetails(tvId));
        } else {
            return ResponseEntity.status(429).body(null);
        }
    }
}
