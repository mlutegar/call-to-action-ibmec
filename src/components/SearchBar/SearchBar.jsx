import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton, SearchIcon } from './Style';

const SearchBar = ({ onSearch, searchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Insira o ano"
          value={inputValue}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;