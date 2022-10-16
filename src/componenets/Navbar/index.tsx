import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as NewPost } from "../../assets/Navbar/NewPost.svg";
// import { ReactComponent as SearchIcon } from "../../assets/Navbar/SearchIcon.svg";
import ProfileSearch from "../ProfileSearch";

let allAccounts = [
  {
    name: "Naman Agrawal",
    username: "naman2003now",
    profileImage:
      "https://i.picsum.photos/id/907/400/400.jpg?hmac=rW0KD_ETo42hpFolaALqoj4PtxlYfDYIXirAcsuoymQ",
  },
];

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [searchResults, setSearchResults] = useState(allAccounts);

  async function onSearchBarFocus() {
    setSearchResultsVisible(true);
    const response = await axios.get("http://localhost:6969/user/search");
    allAccounts = response.data;
    if (searchQuery === "") {
      setSearchResults(allAccounts);
    }
  }

  function onSearchQueryChanged(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    setSearchResults(
      allAccounts.filter(
        ({ username }) =>
          username.toLowerCase().search(searchQuery.toLowerCase()) !== -1,
      ),
    );
  }

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchResultsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <div className="flex items-center fixed top-0 justify-center left-0 border-b bg-white border-seperator h-14 w-full">
      <div className="flex max-w-4xl w-full justify-between items-center h-full">
        <Instagram />
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 py-2.5 flex flex-col items-center"
          onFocus={onSearchBarFocus}
          ref={searchContainerRef}
        >
          <div className="bg-[#eeeeee] w-64 rounded-md p-1.5 px-3 invisible sm:visible z-10 transition-all duration-100">
            <input
              className="bg-[#eeeeee] outline-0 w-0 sm:w-60"
              placeholder="Search"
              onChange={onSearchQueryChanged}
              value={searchQuery}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchResultsVisible(false);
            }}
          >
            <ProfileSearch
              search={searchResults}
              visible={searchResultsVisible}
            />
          </button>
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
    </div>
  );
}

export default Navbar;
