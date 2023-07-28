//Importing Dependencies
import './App.css';
import { useEffect, useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  let [message, setMessage] = useState('Search for a song, album, or artist');
  let [data, setData] = useState([]);
  let searchInput = useRef('');

  const API_URL = `https://itunes.apple.com/search?term=`;

  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} - Music Library`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length) {
        setData(resData.results);
      } else {
        setMessage('No results found');
      }
    }
    fetchData();
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  )
}

export default App;
