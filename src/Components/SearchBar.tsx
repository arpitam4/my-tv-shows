import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a show"
        className="px-2 py-1 w-full rounded-full border border-black"
      />
      <BsSearch
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
