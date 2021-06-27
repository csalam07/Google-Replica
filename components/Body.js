import React, { useRef } from "react";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
// import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import LottieFiles from "./LottieFiles";

function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <form className="flex flex-col items-center mt-[84px] flex-grow w-4/5">
      {/* <Image src="/logo.png" width="300" height="200" objectFit="contain" /> */}
      <LottieFiles />
      <div className="flex items-center w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-full px-5 py-2 border border-gray-200 hover:shadow-lg focus-within:shadow-lg">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          className="focus:outline-none flex-grow"
          type="text"
          placeholder="search"
          ref={searchInputRef}
        />
        <MicrophoneIcon className="h-5 ml-3 text-blue-500 hover:cursor-pointer" />
      </div>
      <div className="flex mt-4 flex-col sm:flex-row">
        <button type="submit" onClick={search} className="btn sm:mr-2 ">
          Google Search
        </button>
        <button type="submit" onClick={search} className="btn">
          I'm Feeling Lucky
        </button>
      </div>
      <p className="text-sm mt-5">
        Google offered in:
        <span className="text-blue-500 ml-2 hover:underline hover:cursor-pointer">
          Eng
        </span>
      </p>
    </form>
  );
}

export default Body;
