import React, { useState, useEffect } from 'react';
import Button from 'components/atoms/Button';
import { SearchBarType } from './SearchBar.models.d';

const SearchBar = ({ setSearchInputValue, searchDebts, searchInputValue }: SearchBarType) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchInputValue) setSearchInputValue(e.target.value);
  };

  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (searchInputValue.length < 3) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [searchInputValue]);

  return (
    <form className='searchBar'>
        <input className='searchbar' type='text' value={searchInputValue} minLength={3} required pattern='\d*' onChange={(e) => handleChange(e)}/>
         <Button label='SZUKAJ' variant='search' type='submit' disabled={disabledButton} onClick={searchDebts}/>
    </form>
  );
};

export default SearchBar;
