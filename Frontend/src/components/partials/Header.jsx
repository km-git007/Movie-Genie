import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
   return (
      <div
         style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path
               })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}
         className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
      >
         <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400 cursor-pointer"
         >
            <h1 className="w-[70%] text-5xl font-black text-zinc-50 hover:text-[#cecaf0] transition-all duration-300">
               {data.name ||
                  data.title ||
                  data.original_name ||
                  data.original_title}
            </h1>
            <p className="w-[70%] mt-3 mb-3 text-zinc-100 hover:text-[#cecaf0] transition-all duration-300">
               {data.overview}
               {/* <span className="text-blue-300">more</span> */}
            </p>
            <p className="text-zinc-200 font-semibold hover:text-[#cecaf0] transition-all duration-300">
               <i className=" text-yellow-500 ri-megaphone-fill"></i>{" "}
               {data.release_date || "No Information"}
               <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
               {data.media_type.toUpperCase()}
            </p>
         </Link>
         <Link
            to={`/${data.media_type}/details/${data.id}/trailer`}
            className="mt-7 font-semibold bg-[#6556CD] p-4 rounded-lg text-white hover:bg-[#5343c7] transition-all duration-200 hover:scale-[105%] active:scale-[100%]"
         >
            Watch Trailer
         </Link>
      </div>
   );
};

export default Header;
