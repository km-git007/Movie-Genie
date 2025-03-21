// import React from 'react'
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';

// const GPTHeader = ({ onButtonClick }) => {
//    const searchText = useRef(null);
//    return (
//       <>
//          <div className="flex justify-start items-center mt-5 mb-10">
//             <Link to="/">
//                <h1 className=" ml-7 text-2xl font-semibold text-zinc-400 mr-72 cursor-pointer hover:text-[#6556CD]  hover:scale-[103%] transition-all duration-200 active:scale-[100%]">
//                   <i
//                      className="ri-arrow-left-line"
//                   ></i>{" "}
//                   Back to home
//                </h1>
//                {/* <div className=''></div> */}
//             </Link>
//             <input
//                ref={searchText}
//                type="text"
//                className="h-32 w-[45%] text-white pl-4  py-2  m-4 rounded-md bg-transparent text-2xl  bg-[#312f39]"
//                placeholder="search anything you want to watch"
//             />
//             <i className="text-zinc-300 text-3xl font-extrabold ri-search-line cursor-pointer hover:scale-[115%] hover:text-[#6556CD] transition-all duration-200 active:scale-[100%]"
//                onClick={() => { onButtonClick(searchText.current.value) }}>
//             </i>
//          </div></>
//    )
// }

// export default GPTHeader

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const GPTHeader = ({ onButtonClick }) => {
   const searchText = useRef(null);

   return (
      <div className="relative w-full px-9">
         {/* Back Button (Pinned to the top left) */}
         <Link to="/" className="absolute top-5 left-7">
            <h1 className="text-2xl font-semibold text-zinc-400 cursor-pointer hover:text-[#6556CD] hover:scale-[103%] transition-all duration-200 active:scale-[100%]">
               <i className="ri-arrow-left-line"></i> Back to home
            </h1>
         </Link>

         {/* Search Bar (Aligned properly) */}
         <div className="flex items-start justify-center w-full mt-5">
            <input
               ref={searchText}
               type="text"
               className="h-32 w-[70%] text-white pl-6 py-2 rounded-md bg-[#312f39] text-2xl"
               placeholder="Search anything you want to watch based on plot, movie casts etc."
            />
            <i
               className="text-zinc-300 text-5xl font-extrabold ri-search-line cursor-pointer hover:scale-[115%] hover:text-[#6556CD] transition-all duration-200 active:scale-[100%] mt-10 ml-4"
               onClick={() => onButtonClick(searchText.current.value)}
            ></i>
         </div>
      </div>
   );
};

export default GPTHeader;

