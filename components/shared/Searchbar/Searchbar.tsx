"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface SearchbarProps {
  routeType: string;
}

const Searchbar = ({ routeType }: SearchbarProps) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    });

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

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
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      />
    </div>
  );
};

export default Searchbar;
