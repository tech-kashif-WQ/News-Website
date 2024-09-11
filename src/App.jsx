import "./App.css";
import Newsapp from "./Components/Newsapp";
import { Routes, Route } from "react-router-dom";
import AllNews from "./Components/AllNews/AllNews";
import Trending from "./Components/Trending/Trending";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Newsapp />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  );
}

export default App;
