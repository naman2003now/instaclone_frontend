import React from "react";
import ProfileInfo from "../componenets/ProfileInfo";
import { ReactComponent as PostsTabIcon } from "../assets/Profile/ProfilePostsTabIcon.svg";
import { ReactComponent as TaggedTabIcon } from "../assets/Profile/ProfileTaggedTabIcon.svg";
import { ReactComponent as SavedTabIcon } from "../assets/Profile/ProfileSavedTabIcon.svg";

const account = {
  posts: 2,
  followers: 475,
  following: 532,
  name: "Naman Agrawal",
  username: "naman2003now",
  bio: "VIT'25\nGeek💻\nCoder👨‍💻\nSpeed Cuber🧩",
};

function Tag({
  label,
  active,
  Icon,
}: {
  label: string;
  Icon: React.FC;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex flex-row justify-center items-center p-4 mx-8 text-xs font-semibold ${
        active ? "border-t text-dark-gray" : "text-light-gray"
      }`}
    >
      <Icon />
      <div className="px-2">{label.toUpperCase()}</div>
    </button>
  );
}

Tag.defaultProps = {
  active: false,
};

function Profile() {
  return (
    <div className=" max-w-4xl w-full">
      <ProfileInfo account={account} />
      <div className="flex flex-row justify-center border-t border-seperator">
        <Tag label="Posts" Icon={PostsTabIcon} active />
        <Tag label="Saved" Icon={SavedTabIcon} />
        <Tag label="Tagged" Icon={TaggedTabIcon} />
      </div>
    </div>
  );
}

export default Profile;
