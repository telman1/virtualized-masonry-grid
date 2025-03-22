import {ChangeEvent, useEffect, useState} from 'react';
import {useImages} from "../../context/ImageContext.tsx";
import {useDebounce} from "../../hooks/useDebounce.tsx";
import {UI_TEXT} from "../../helpers/constants.ts";

const SearchBar = () => {
  const { setSearchTerm } = useImages();
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce<string>(input, 300);

  useEffect(() => {
    setSearchTerm(debouncedInput);
  }, [debouncedInput, setSearchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder={UI_TEXT.SEARCH_BY_PHOTOGRAPHER}
      className="search-input"
    />
  );
};

export default SearchBar;