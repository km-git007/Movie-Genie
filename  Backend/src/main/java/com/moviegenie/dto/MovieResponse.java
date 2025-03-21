package com.example.movieapi.dto;

import lombok.Data;
import java.util.List;

@Data
public class MovieResponse {
    private int page;
    private List<Movie> results;

    @Data
    public static class Movie {
        private String title;
        private String overview;
        private String release_date;
        private String poster_path;
        private double vote_average;
    }
}
