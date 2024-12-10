"use client";

// import the data
import { data, ProfileProps } from "@/services/data";

// import the profile UI
import { ProfileCard } from "../components/SearchFunctionnalityComponents/ProfileCard";

import { useState, useEffect } from "react";
import { usePaginate } from "@/hooks/usePaginate";
import { Button } from "../components/PrevNextButton";

export default function HomePage() {
  // initialize useState for the data
  const [profileData, setProfileData] = useState<ProfileProps[]>([]);

  useEffect(() => {
    setProfileData(data);
  }, []);

  //   data limit
  const limit = 6;

  // the hook
  const { nextPage, prevPage, paginatedData, currentPage } = usePaginate(
    profileData,
    limit
  );

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-4">
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          {paginatedData.map(
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

        {/* Prev and Next buttons */}
        <div className="flex flex-row justify-end items-center gap-12 my-6">
          <Button
            CTA="Previous"
            onClick={prevPage}
            disabled={currentPage === 1 && true}
          />
          <Button CTA="Next" onClick={nextPage} disabled={false} />
        </div>
      </div>
    </section>
  );
}
