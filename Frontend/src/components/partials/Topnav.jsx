import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = () => {
   const [query, setquery] = useState("");
   const navigate = useNavigate();
   const [searches, setsearches] = useState([]);
   const location = useLocation(); // Get the current location (path)

   const GetSerches = async () => {
      try {
         const { data } = await axios.get(`/search/multi?query=${query}`);
         setsearches(data.results);
      } catch (error) {
         console.log("Error: ", error);
      }
   };

   const handleGPTClick = () => {
      navigate('/gpt'); // Navigate to the '/gpt' route
   };

   useEffect(() => {
      GetSerches();
   }, [query]);

   return (
      <div className="w-[80%] h-[8vh] relative flex mx-auto  items-center mb-3">
         <i className="text-zinc-400 text-3xl font-extrabold ri-search-line cursor-pointer hover:text-[#6556CD]
          transition-all duration-200 hover:scale-[115%] active:scale-[100%] "></i>
         <input
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className="w-[50%]  text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
            type="text"
            placeholder="search anything"
         />
         {query.length > 0 && (
            <i
               onClick={() => setquery("")}
               className=" text-zinc-400 text-3xl ri-close-fill right-0"
            ></i>
         )}

         {/* Conditionally render the GPT Search button only for the home page */}
         {location.pathname === "/" && (
            <button className="absolute top-4 right-0 font-semibold text-xl text-zinc-100 bg-[#5d50cd] py-3 px-5 rounded-lg flex items-center hover:bg-[#5343c7] hover:text-white transition-all duration-200 hover:scale-[105%] active:scale-[100%]"
               onClick={handleGPTClick}>
               <img
                  src="/aiRobot.gif"
                  alt="gptIcon"
                  className="h-8 mr-2"
               />
               Prompt Search
            </button>
         )}


         <div className="z-[100] absolute w-[55%] max-h-[50vh] bg-[#323039]  top-[100%] left-[5%] overflow-auto">
            {searches.map((s, i) => (
               <Link
                  to={`/${s.media_type}/details/${s.id}`}
                  key={i}
                  className="hover:text-zinc-50 hover:bg-[#5d50cd] duration-300 font-semibold text-zinc-300 w-[100%] px-5 py-3 flex justify-start items-center border-b-2 border-zinc-500"
               >
                  <img
                     className="w-[4vh] h-[4vh] object-cover rounded mr-5 shadow-lg "
                     src={
                        s.backdrop_path || s.profile_path
                           ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path
                           }`
                           : noimage
                     }
                     alt=""
                  />
                  <span>
                     {s.name ||
                        s.title ||
                        s.original_name ||
                        s.original_title}
                  </span>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Topnav;
