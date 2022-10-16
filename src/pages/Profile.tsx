import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileInfo from "../componenets/ProfileInfo";
import { ReactComponent as PostsTabIcon } from "../assets/Profile/ProfilePostsTabIcon.svg";
import { ReactComponent as TaggedTabIcon } from "../assets/Profile/ProfileTaggedTabIcon.svg";
import { ReactComponent as SavedTabIcon } from "../assets/Profile/ProfileSavedTabIcon.svg";
import Post from "../componenets/Post";

export interface IPostsCatogaryTab {
  label: string;
  Icon: React.FC;
  active?: boolean;
}

function PostsCatogaryTab({ label, active, Icon }: IPostsCatogaryTab) {
  return (
    <button
      type="button"
      className={`flex flex-row justify-center items-center p-4 mx-8 text-xs font-semibold ${
        active ? "border-t text-dark-gray" : "text-light-gray"
      }`}
    >
      <Icon />
      <div className="px-2 hidden sm:flex">{label.toUpperCase()}</div>
    </button>
  );
}

PostsCatogaryTab.defaultProps = {
  active: false,
};

function Profile() {
  const tempAccount = {
    posts: 2,
    followers: 475,
    following: 532,
    name: "Naman Agrawal",
    username: useParams().username || "naman2003now",
    bio: "VIT'25\nGeek💻\nCoder👨‍💻\nSpeed Cuber🧩",
    profileImage:
      "https://i.picsum.photos/id/907/400/400.jpg?hmac=rW0KD_ETo42hpFolaALqoj4PtxlYfDYIXirAcsuoymQ",
  };

  const [account, setAccount] = useState(tempAccount);
  const { username } = useParams();

  useEffect(() => {
    async function getAccount() {
      const response = await axios.get(
        `http://localhost:6969/user/data/${username}`,
      );
      console.log(response);
      const { name, bio, profileImage } = response.data;
      setAccount({
        posts: 2,
        followers: 475,
        following: 532,
        username: username || "naman2003now",
        name,
        bio,
        profileImage,
      });
    }
    getAccount();
  }, [username]);

  return (
    <div className=" max-w-4xl w-full">
      <ProfileInfo account={account} />
      <div className="flex flex-row justify-center border-t border-seperator">
        <PostsCatogaryTab label="Posts" Icon={PostsTabIcon} active />
        <PostsCatogaryTab label="Saved" Icon={SavedTabIcon} />
        <PostsCatogaryTab label="Tagged" Icon={TaggedTabIcon} />
      </div>
      <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full p-0 sm:p-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Profile;
