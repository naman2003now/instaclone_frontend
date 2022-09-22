import React from "react";
import { ReactComponent as ProfileGearIcon } from "../../assets/ProfileInfo/ProfileGearIcon.svg";

function Stat({ count, label }: { label: string; count: number }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1 my-1">
      <strong>{count}</strong>
      <div className="text-xs sm:text-base"> {label}</div>
    </div>
  );
}

export interface IProfileInfo {
  account: {
    posts: number;
    followers: number;
    following: number;
    name: string;
    bio: string;
    username: string;
    profileImage: string;
  };
}

function ProfileInfo({ account }: IProfileInfo) {
  let index = 0;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between md:aspect-[3/1] w-full pb-10 md:py-0">
      <div className="w-2/5 flex mb-2 justify-center items-center p-4 pt-0">
        <div className="overflow-hidden shadow-inner shadow-black aspect-square w-full md:w-1/2 rounded-full">
          <img src={account.profileImage} alt="Profile" />
        </div>
      </div>
      <div className="w-full sm:w-3/5 grid grid-rows-7 md:grid-rows-6">
        <div className="grid grid-rows-2 grid-span-2 md:grid-cols-2 md:grid-span-1 justify-center md:justify-between items-center">
          <div className="text-4xl font-extralight">{account.username}</div>
          <div className="flex flex-row justify-start items-center">
            <button
              type="button"
              className="border border-seperator p-1.5 m-0.5 rounded-md text-xs font-bold w-4/5 md:w-auto"
            >
              Edit Profile
            </button>
            <button type="button" className="p-2">
              <ProfileGearIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 items-end justify-start">
          <Stat count={account.posts} label="posts" />
          <Stat count={account.followers} label="followers" />
          <Stat count={account.following} label="following" />
        </div>
        <div className="row-span-4 grid grid-rows-4 pr-16 pl-8 sm:pl-0">
          <div className="grid font-bold items-end">
            <div>{account.name}</div>
          </div>
          <div className="row-span-3">
            {account.bio.split("\n").map((text) => {
              index += 1;
              return <p key={index}>{text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
