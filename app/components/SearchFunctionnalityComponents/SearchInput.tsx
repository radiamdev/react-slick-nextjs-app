"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface DefaultProps {
  defaultValue: string | null;
}

export const SearchInput = ({ defaultValue }: DefaultProps) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  // Automatically trigger search on input change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) router.push(`/?q=${inputValue}`);
      else router.push("/");
    }, 500); // Debounce for 500ms to avoid excessive routing

    return () => clearTimeout(timer); // Cleanup on input change
  }, [inputValue, router]);

  return (
    <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-3 p-2 rounded-[15px]">
      {/* Tabler Icon for the Search */}
      <IconSearch className="text-slate-500" size={24} />

      <input
        type="text"
        id="inputId"
        placeholder="Enter your keywords"
        value={inputValue ?? ""}
        onChange={handleChange}
        className="bg-[transparent] outline-none border-none w-full py-2 px-3"
      />
    </div>
  );
};
