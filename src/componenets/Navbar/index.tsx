import React from "react";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as NewPost } from "../../assets/Navbar/NewPost.svg";
import { ReactComponent as SearchIcon } from "../../assets/Navbar/SearchIcon.svg";

function Navbar() {
  return (
    <div className="flex items-center fixed top-0 justify-center left-0 border-b bg-white border-seperator h-14 w-full">
      <div className="flex max-w-4xl w-full justify-between items-center h-full">
        <Instagram />
        <div className="bg-[#eeeeee] rounded-md p-1.5 px-3 invisible sm:visible">
          <input
            className="bg-[#eeeeee] outline-0 w-0 sm:w-60"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-row items-center gap-2 px-4">
          <div className="flex sm:hidden">
            <SearchIcon />
          </div>
          <NewPost />
          <div className="w-8 h-8 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
