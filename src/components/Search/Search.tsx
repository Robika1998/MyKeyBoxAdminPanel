import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

type SearchProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-md">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-grow bg-gray-50 border-none focus:ring-0"
      />
      <Button
        label="Search"
        onClick={handleSearch}
        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
      />
    </div>
  );
};

export default Search;
