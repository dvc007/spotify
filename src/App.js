// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailsSongs from "./components/DetailsSongs";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailsSongs />
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
