import axios from "../utils/axios";

// search movie in TMDB
const searchMovieTMDB = async (movie) => {
   const data = await axios.get(
      "/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1&sort_by=popularity.desc"
   );

   // console.log(data.data.results);
   const fetchedMovie = data?.data?.results[0];

   if (!fetchedMovie) {
      throw new Error(`No movie found for query: ${movie}`);
   }

   // console.log(fetchedMovie);

   return fetchedMovie;
};

export default searchMovieTMDB;