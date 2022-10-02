import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <ul className="flex justify-around h-[30px] bg-white items-center mb-5">
      <Link to="/">
        <li className=" font-bold p-3 hover:border-b-4 hover:border-blue-800">
          Cerita
        </li>
      </Link>
      <Link to="/reels">
        <li className="font-bold p-3 hover:border-b-4 hover:border-blue-800">
          Reels
        </li>
      </Link>
      <Link to="/forum">
        <li className="font-bold p-3 hover:border-b-4 hover:border-blue-800">
          Forum
        </li>
      </Link>
    </ul>
  );
};

export default HomeNavbar;
