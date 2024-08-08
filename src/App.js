import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function App() {

  const [ results, setResults ] = useState([]);
  const [ query, setQuery ] = useState('react hooks');
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () =>{
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
    searchInputRef.current.focus();
  }

  return (
    <><form onSubmit={handleSearch}>
        <input type="search" value={query} ref={searchInputRef} onChange={(e)=>{setQuery(e.target.value)}}/>
        <button type="submit">Search</button>
      </form>
      {(results.length !== 0) && <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>}
    </>
  );
}