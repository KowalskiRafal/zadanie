import React, { useState } from 'react';
import { DebtsType } from 'components/molecules/DebtsList/DebtsList.models';
import SearchBar from 'components/atoms/SearchBar';
import { baseUrl, searchUrl } from 'api';
import { DebtsSearchProps } from './DebtsSearch.models';

const DebtsSearch = ({ setDebts, baseDebts }:DebtsSearchProps) => {
  const [searchResult, setSearchResult] = useState<DebtsType[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const serachBody = { search: searchInputValue };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serachBody),
    };

    if (searchInputValue) {
      fetch(searchInputValue.length ? searchUrl : baseUrl, options)
        .then((response) => response.json())
        .then((response) => {
          setDebts(response);
          setSearchResult(response);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          Object.keys(err);
        });
    } else {
      setDebts(baseDebts);
    }
  };

  const renderLoading = loading ? <p className='debtsSearch'>Ładuję dane, Proszę czekać...</p> : null;
  const renderMinLength = searchInputValue.length < 3 ? <p className='debtsSearch'>Minimalna liczba znakót to 3</p> : null;

  if (error) return <p>Błąd</p>;

  return (
    <>
    { searchResult ? <SearchBar searchDebts={handleSearch} setSearchInputValue={setSearchInputValue} searchInputValue={searchInputValue}/> : null}
    { searchResult ? renderLoading : null}
    {searchInputValue ? renderMinLength : null}
    </>
  );
};

export default DebtsSearch;
