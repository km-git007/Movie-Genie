import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GPTHeader from './GPTHeader';
import Loading from './Loading';
import axios from "axios";
import searchMovieTMDB from '../utils/searchMovie';
import noimage from "/noimage.jpeg";


const GPT = () => {
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const handleGptSearchClick = async (question) => {

      // Handle Empty Input
      if (!question.trim()) {
         alert("Please enter a search term");
         setIsLoading(false);
         return;
      }

      // Clear previous results
      setMovies([]);

      // set loading 
      setIsLoading(true);

      try {

         // API call to backend
         const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ai/generate`, {
            question,
         });


         // API response
         // Extract the movie payload string from the
         const apiResponse = result.data.candidates[0].content.parts[0].text;

         if (apiResponse.startsWith("Sorry")) {
            alert("No movie found matching the search term.");
            setIsLoading(false);
            return;
         }

         // Extract the text and convert to an array
         const gptMovies = apiResponse.trim().split(',');

         // Fetch movie results
         const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

         // [Promise, Promise, Promise, Promise, Promise]
         const tmdbResults = await Promise.allSettled(promiseArray);
         const validResults = tmdbResults
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);

         setMovies(validResults);
         // console.log("Results:", tmdbResults);
      } catch (error) {
         console.error("Error fetching movie data:", error);
         alert("Failed to fetch movies. Please try again later.");
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className='bg-[#1F1E24] min-w-full min-h-[700vh]'>
         <div className='flex-col min-w-full min-h-[100vh]'>
            <GPTHeader onButtonClick={handleGptSearchClick} />
            {movies.length === 0 && !isLoading && (
               <div className="h-[80vh] flex justify-center items-center">
                  <img
                     src="/GPThome.jpg"
                     alt=""
                     className="h-full object-cover w-auto"
                  />
               </div>
            )}


            {isLoading ? (
               <Loading />
            ) : (
               <div className="flex flex-wrap w-full h-full px-[5%]">
                  {movies.map((c, i) => (
                     <Link
                        to={`/movie/details/${c.id}`}
                        className="relative w-[25vh] mr-[5%] mb-[5%]"
                        key={i}
                     >
                        <img
                           className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover hover:scale-[103%] transition-all duration-200 rounded-lg"
                           src={
                              c.poster_path || c.backdrop_path || c.profile_path
                                 ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`
                                 : noimage
                           }
                           alt=""
                        />
                        <h1 className="text-center text-2xl text-zinc-300 mt-3 font-semibold">
                           {c.name || c.title || c.original_name || c.original_title}
                        </h1>

                        {c.vote_average ? (
                           <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-orange-500 text-white w-[5vh] h-[5vh] flex justify-center items-center hover:scale-125 hover:bg-orange-400 transition-all duration-300">
                              {(c.vote_average * 10).toFixed()} <sup>%</sup>
                           </div>
                        ) : (
                           <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-orange-500 text-white w-[5vh] h-[5vh] flex justify-center items-center hover:scale-125 hover:bg-orange-400 transition-all duration-300">
                              {Math.floor(Math.random() * (100 - 60 + 1)) + 60} <sup>%</sup>
                           </div>
                        )}
                     </Link>
                  ))}
               </div>
            )}
         </div>
      </div>
   );

}

export default GPT;


