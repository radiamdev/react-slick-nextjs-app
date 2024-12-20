import Image from "next/image";

//Import the profile interface from data.js
import { ProfileProps } from "@/services/data";

export const ProfileCard = (props: ProfileProps) => {
  const { name, email, username, role, photo } = props;

  return (
    <div className="profile__card rounded-[15px] border border-solid">
      <Image
        src={photo || "/public/windows.svg"} // Fallback to default image
        alt={username}
        className="h-[200px]"
        height={1000}
        width={400}
      />

      <div className=" bg-slate-300 p-3">
        <h2 className="">Name: {name}</h2>

        <p>Role: {role}</p>

        <p>Email: {email}</p>

        <p>follow @{username}</p>
      </div>
    </div>
  );
};
