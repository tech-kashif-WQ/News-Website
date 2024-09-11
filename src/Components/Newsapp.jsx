import React, { useEffect } from "react";
import Cards from "./Cards";
import { useState } from "react";
import { Link } from "react-router-dom";

const Newsapp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "8985cf47690746468923c44a5c2fdbad";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <li className="link">
            <Link to="/all-news">All News</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>

      <div>{newsData ? <Cards data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
