import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import LoadingSpinner from "./LoadingSpinner";

interface SearchBarProps {
  onSearch: (value: string) => void;
  loading: boolean;
}

const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  // Trigger the search whenever the input value changes
  useEffect(() => {
    if (inputValue) {
      onSearch(inputValue);
    }
  }, [inputValue, onSearch]);

  return (
    <div className="relative mb-4 flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a show"
        className="px-2 py-1 w-full rounded-full border border-black"
      />
      {loading ? (
        <LoadingSpinner className="absolute right-4 top-1/2 -translate-y-1/2" />
      ) : (
        <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      )}
    </div>
  );
};

export default SearchBar;
