import * as React from "react";
import { FiSearch as SearchIcon } from "react-icons/fi";
export interface ISearchProps {
  placeholder?: string;
}

export function Search(props: ISearchProps) {
  return (
    <div className="relative w-full h-full">
      <input
        className="w-full h-full border border-[white] rounded-md bg-transparent px-10 text-[white] placeholder:text-[white] "
        placeholder={props.placeholder}
      />
      <SearchIcon
        size="1.3rem"
        color="white"
        className="absolute top-2.5 left-2.5"
      />
    </div>
  );
}
