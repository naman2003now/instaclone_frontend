import React from "react";
import { Link } from "react-router-dom";

export interface IShortProfile {
  username: string;
  name: string;
  profileImage?: string;
}

export interface INavbarSearchResults {
  search: IShortProfile[];
  visible: boolean;
}

export interface INavbarSearchResult {
  shortProfile: IShortProfile;
}

export function NavbarSearchResult({ shortProfile }: INavbarSearchResult) {
  return (
    <Link
      to={`/${shortProfile.username}`}
      className="flex flex-row items-center w-full h-16 px-4 hover:bg-[#f6f6f6]"
    >
      <img
        src={
          shortProfile.profileImage ||
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
        }
        alt={shortProfile.username}
        className="w-14 h-14 rounded-full"
      />
      <div className="flex flex-col px-4">
        <p className="text-left">{shortProfile.username}</p>
        <p className="text-left text-sm text-light-gray">{shortProfile.name}</p>
      </div>
    </Link>
  );
}

function NavbarSearchResults({ search, visible }: INavbarSearchResults) {
  if (!visible) return <div className="" />;
  return (
    <div className="bg-white w-96 h-80 rounded-sm drop-shadow-lg overflow-auto py-4 my-4">
      {search.map((profile) => (
        <NavbarSearchResult shortProfile={profile} key={profile.username} />
      ))}
    </div>
  );
}

export default NavbarSearchResults;
