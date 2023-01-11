import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Player/Player";
import PlayerContext from "../Utils/PlayerContext";
import Songs from "../Utils/Songs";
import "./Layout.css";

const Layout = () => {
  const [player, setPlayer] = useState({
    songs: Songs,
    index: 0,
  });

  const audioElement = useRef();

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="body">
          <Outlet />
        </main>
        <nav className="navbar">
          <Navbar />
        </nav>
        <footer className="player">
          <Player />
        </footer>
      </div>
      <audio ref={audioElement} muted  autoplay preload="auto" id="audio-element"></audio>
    </PlayerContext.Provider>
  );
};

export default Layout;
