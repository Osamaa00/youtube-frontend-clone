import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom'

function Header() {

    const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to="/" >
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/110px-YouTube_Logo_2017.svg.png"
                    alt=""
                />
            </Link>
        </div>
        <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={`/search/${inputSearch}`} >
                <SearchIcon className="header__inputButton" />
            </Link>
        </div>
        <div className="header__icons">
            <VideoCallIcon className="header__icon" />
            <AppsIcon className="header__icon" />
            <NotificationsIcon className="header__icon" />
            <Avatar
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.s-nbcnews.com%2Fj%2Fstreams%2F2013%2FAugust%2F130808%2F6C8558749-130808-walter-white-tease.fit-760w.jpg&f=1&nofb=1"
                alt="Heisenberg"
            />
        </div>
    </div>
  );
}

export default Header;
