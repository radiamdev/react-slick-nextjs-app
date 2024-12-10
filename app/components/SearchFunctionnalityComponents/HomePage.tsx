"use client";

// import the data
import { data, ProfileProps } from "@/services/data";

// import the searchBar
import { SearchInput } from "./SearchInput";

// import the profile UI
import { ProfileCard } from "./ProfileCard";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  // initialize useState for the data
  const [profileData, setProfileData] = useState<ProfileProps[]>([]);

  // Get total users
  const totalUser = profileData.length;

  // Use searchParams to get query from URL
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("q") ?? ""; // Default to an empty string if query is undefined

  useEffect(() => {
    const handleSearch = () => {
      if (!data || data.length === 0) {
        console.warn("No data available");
        setProfileData([]);
        return;
      }

      const findUser = data.filter((user) => {
        if (searchQuery) {
          return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        return true; // Return all users if no search query
      });

      setProfileData(findUser);
    };

    handleSearch();
  }, [searchQuery]); // Rerun the effect only when searchQuery changes

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
      <p className="mb-10 text-white">
        Showing {totalUser} {totalUser > 1 ? "Users" : "User"}
      </p>

      <SearchInput defaultValue={searchQuery} />

      {/* Conditionally render the profile cards */}
      <div className="mt-8">
        {totalUser === 0 ? (
          <p>No result returned</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            {profileData.map(
              ({ username, role, name, photo, email }: ProfileProps) => (
                <div key={username}>
                  <ProfileCard
                    name={name}
                    role={role}
                    photo={photo}
                    email={email}
                    username={username}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
