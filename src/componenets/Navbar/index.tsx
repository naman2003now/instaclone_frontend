import React, { useState } from "react";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as NewPost } from "../../assets/Navbar/NewPost.svg";
// import { ReactComponent as SearchIcon } from "../../assets/Navbar/SearchIcon.svg";
import ProfileSearch from "../ProfileSearch";

const account = {
  name: "Naman Agrawal",
  username: "naman2003now",
  profileImage:
    "https://i.picsum.photos/id/907/400/400.jpg?hmac=rW0KD_ETo42hpFolaALqoj4PtxlYfDYIXirAcsuoymQ",
};

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  return (
    <div className="flex items-center fixed top-0 justify-center left-0 border-b bg-white border-seperator h-14 w-full">
      <div className="flex max-w-4xl w-full justify-between items-center h-full">
        <Instagram />
        <div className="bg-[#eeeeee] rounded-md p-1.5 px-3 invisible sm:visible">
          <input
            className="bg-[#eeeeee] outline-0 w-0 sm:w-60"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchResultsVisible(true)}
            onBlur={() => setSearchResultsVisible(false)}
            value={searchQuery}
          />
        </div>
        <div className="flex flex-row items-center gap-2 px-4">
          {/* <button
            type="button"
            className="flex sm:hidden"
            onFocus={() => setSearchResultsVisible(true)}
            onBlur={() => setSearchResultsVisible(false)}
          >
            <SearchIcon />
          </button> */}
          <NewPost />
          <div className="w-8 h-8 rounded-full bg-black" />
        </div>
      </div>
      <ProfileSearch
        search={[account, account, account, account, account, account]}
        visible={searchResultsVisible}
      />
    </div>
  );
}

export default Navbar;
