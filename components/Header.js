import React from "react";
import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="flex justify-between w-full p-5 text-sm text-gray-700 items-center">
      {/* Left */}

      <ul className="flex space-x-4 ">
        <li className="link">
          <a href="https://about.google/">About</a>
        </li>
        <li className="link">
          <a href="https://ads.google.com/">Stores</a>
        </li>
      </ul>

      {/* right */}

      <ul className="flex space-x-4 items-center">
        <li className="link">
          <a href="https://mail.google.com/mail/">Gmail</a>
        </li>
        <li className="link">
          <a href="">Images</a>
        </li>
        <li>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer " />
        </li>
        <li className="cursor-pointer ">
          <Avatar url="/csalam.jpeg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
