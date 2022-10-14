import React from "react";

export interface IShortProfile {
  username: string;
  name: string;
  profileImage: string;
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
    <button
      type="button"
      className="flex flex-row items-center w-full h-16 px-4 hover:bg-[#f6f6f6]"
    >
      <img
        src={shortProfile.profileImage}
        alt={shortProfile.username}
        className="w-14 h-14 rounded-full"
      />
      <div className="flex flex-col px-4">
        <p className="text-left">{shortProfile.username}</p>
        <p className="text-left text-sm text-light-gray">{shortProfile.name}</p>
      </div>
    </button>
  );
}

function NavbarSearchResults({ search, visible }: INavbarSearchResults) {
  if (!visible) return <div />;
  return (
    <div className="flex justify-center fixed top-0 left-0 w-screen h-screen ">
      <div className="bg-white w-96 h-80 rounded-sm drop-shadow-lg my-14 overflow-auto py-4">
        {search.map((profile) => (
          <NavbarSearchResult shortProfile={profile} />
        ))}
      </div>
    </div>
  );
}

export default NavbarSearchResults;
