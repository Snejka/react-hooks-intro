import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function App() {

  const [ results, setResults ] = useState([]);
  const [ query, setQuery ] = useState('react hooks');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
    searchInputRef.current.focus();
  }
  //TODO: Styling
  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="search" value={query} ref={searchInputRef} onChange={(e)=>{setQuery(e.target.value)}}/>
        <button type="submit">Search</button>
      </form>
      { loading
        ? <div>
            <p>Loading results...</p>
          </div>
        : <ul>
            {results.map(result => (
              <li key={result.objectID}>
                <a href={result.url}>{result.title}</a>
              </li>
            ))}
          </ul>
      }
      { error 
        && <p> {error.message} </p>
      }
    </>
  );
}