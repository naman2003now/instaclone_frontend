import React from "react";
import { ReactComponent as ProfileGearIcon } from "../../assets/ProfileInfo/ProfileGearIcon.svg";

interface IStat {
  label: string;
  count: number;
}

function Stat({ count, label }: IStat) {
  return (
    <div>
      <strong>{count}</strong> {label}
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
  };
}

function ProfileInfo({ account }: IProfileInfo) {
  let index = 0;
  return (
    <div className="flex flex-row justify-between aspect-[3/1] w-full">
      <div className="w-2/5 flex justify-center items-center">
        <div className="overflow-hidden shadow-inner shadow-black aspect-square w-1/2 rounded-full">
          <img
            src="https://i.picsum.photos/id/907/400/400.jpg?hmac=rW0KD_ETo42hpFolaALqoj4PtxlYfDYIXirAcsuoymQ"
            alt="Profile"
          />
        </div>
      </div>
      <div className="w-3/5 grid grid-rows-6">
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="text-4xl font-extralight">{account.username}</div>
          <div className="flex flex-row justify-start items-center">
            <button
              type="button"
              className="border border-seperator p-1.5 m-0.5 rounded-md text-xs font-bold"
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
        <div className="row-span-4 grid grid-rows-4 pr-16">
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
