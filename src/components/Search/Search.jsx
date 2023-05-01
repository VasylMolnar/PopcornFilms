import React from 'react';
import Input from '../UI/Input/Input';
import { debounce } from 'lodash';
import { FcSearch } from 'react-icons/fc';

const Search = ({ setSearch }) => {
  return (
    <form
      className="search"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div className="search_content">
        <Input
          className="input"
          type="text"
          placeholder="Пошук"
          onChange={debounce(e => {
            setSearch(e.target.value);
          }, 300)}
        />

        <button className="btn btn-danger">
          <FcSearch className="icon" />
        </button>
      </div>
    </form>
  );
};

export default Search;
