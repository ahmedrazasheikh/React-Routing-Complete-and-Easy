import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const getNews = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q:  query , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'b328807e66msh819d0bad89a5967p167eeejsnd99be6d914bf',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.value);
      setNews(response.data.value);
      console.log(news)
    }).catch(function (error) {
      console.error(error);
    }); 
  }

  return (
    <div>

<form onSubmit={getNews}>
        <input
          type="text"
          placeholder="Enter a Desire Topic"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Get News</button>
      </form>

  
    </div>
  );
}

export default App;
