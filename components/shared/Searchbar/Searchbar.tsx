"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface SearchbarProps {
  routeType: string;
}

const Searchbar = ({ routeType }: SearchbarProps) => {
  return (
    <div className="searchbar">
      <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        id="text"
        className="no-focus searchbar_input"
        placeholder={`${
          routeType !== "search" ? "Search Communitites" : "Search Creators"
        }`}
      />
    </div>
  );
};

export default Searchbar;
