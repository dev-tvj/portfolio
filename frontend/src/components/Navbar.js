import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import DarkModeToggleButton from "./DarkModeToggleButton";
import Logo from '../assets/images/tj_logo_white.png';


function Navbar({ onThemeChange }) {

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const storedTheme = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(storedTheme || "light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    onThemeChange(newTheme);
  };

  useEffect(() => {
    setCurrentTheme(storedTheme || "light");
  }, [storedTheme]);

  return (

    <div className="navbar primaryColor" id={expandNavbar ? "open" : "close"}>





      <div className="leftNavBarContainer">

        <Link to="/"> <img src={Logo} className="logo" alt=""/> </Link>

      </div>





      <div className="midNavBarContainer">

      <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>

        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/projects" style={{ display: 'none' }}> Projects </Link>
          <Link to="/experience"> Experience </Link>
          <Link to="/contacts"> Contacts </Link>
          <Link to="/blog"> <b>Blog</b> </Link>
        </div>

        <br/>

      </div>






      <div className="rightNavBarContainer">

        <div className="toggleButtonContainer">
          <DarkModeToggleButton theme={currentTheme} toggleTheme={toggleTheme}/>
        </div>

        <Link className="loginLink" to="/login"> <b>LOGIN</b> </Link>

      </div>





    </div>
  );
}

export default Navbar;