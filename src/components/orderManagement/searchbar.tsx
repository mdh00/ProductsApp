import React, { FormEvent, useState } from "react";
import { CgSearch } from "react-icons/cg";

interface SearchBarProps {
  title: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ title, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      setShowWarning(true);
      return;
    }

    onSearch(searchQuery);
    setShowWarning(false);
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <form className="w-[350px] relative" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          placeholder={title}
          className="w-full h-[50px] bg-purple-400 rounded-[30px] p-4 placeholder-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-1 p-3 text-black" type="submit">
          <CgSearch className="font-bold w-6 h-6" />
        </button>
      </div>
      {showWarning && (
        <div className="bg-red-200 text-red-800 p-3 rounded-md flex justify-between items-center mt-2">
          <span className="font-medium">
            Warning! Enter Valid Query and submitting again.
          </span>
          <button onClick={handleCloseWarning}>
            <span className="text-black  ml-3">Close</span>
          </button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
