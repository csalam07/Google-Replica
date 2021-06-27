import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useRef } from "react";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    console.log(term);

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer lg:ml-10"
          src="/logo.png"
          width={120}
          height={40}
          objectFit="contain"
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl lg:ml-10">
          <div className="flex items-center w-full  rounded-full px-5 py-2  hover:shadow-lg focus-within:shadow-lg">
            <input
              className="focus:outline-none flex-grow w-full"
              type="search"
              placeholder="search"
              ref={searchInputRef}
              defaultValue={router.query.term}
            />
            <MicrophoneIcon className="icon border-l-2 border-gray-300 pl-3" />
            <SearchIcon className="icon" />
          </div>
          <button onClick={search} hidden type="submit">
            search
          </button>
        </form>
        <ul className="flex space-x-4 items-center ml-auto">
          <li>
            <ViewGridIcon className="hidden sm:inline-flex h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer " />
          </li>
          <li className="cursor-pointer ">
            <Avatar url="/csalam.jpeg" />
          </li>
        </ul>
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
