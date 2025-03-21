package com.example.movieapi.service;

import com.example.movieapi.dto.MovieResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class TMDBService {

    @Value("${tmdb.api.key}")
    private String apiKey;

    @Value("${tmdb.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    @Cacheable(value = "movies", key = "#category + '-' + #page")
    public MovieResponse fetchMovies(String category, int page) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl + "/movie/" + category)
                .queryParam("api_key", apiKey)
                .queryParam("language", "en-US")
                .queryParam("page", page)
                .toUriString();
        return restTemplate.getForObject(url, MovieResponse.class);
    }

    @Cacheable(value = "trending", key = "#mediaType + '-' + #timeWindow")
    public MovieResponse fetchTrending(String mediaType, String timeWindow) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl + "/trending/" + mediaType + "/" + timeWindow)
                .queryParam("api_key", apiKey)
                .queryParam("language", "en-US")
                .toUriString();
        return restTemplate.getForObject(url, MovieResponse.class);
    }

    @Cacheable(value = "search", key = "#query")
    public MovieResponse searchMovies(String query) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl + "/search/movie")
                .queryParam("api_key", apiKey)
                .queryParam("language", "en-US")
                .queryParam("query", query)
                .toUriString();
        return restTemplate.getForObject(url, MovieResponse.class);
    }

    @Cacheable(value = "movieDetails", key = "#movieId")
    public Object getMovieDetails(Long movieId) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl + "/movie/" + movieId)
                .queryParam("api_key", apiKey)
                .queryParam("language", "en-US")
                .toUriString();
        return restTemplate.getForObject(url, Object.class);
    }

    @Cacheable(value = "tvDetails", key = "#tvId")
    public Object getTvDetails(Long tvId) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl + "/tv/" + tvId)
                .queryParam("api_key", apiKey)
                .queryParam("language", "en-US")
                .toUriString();
        return restTemplate.getForObject(url, Object.class);
    }
}
