import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalLayout/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/GlobalLayout/Themes";



function App() {

  const storedTheme = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(storedTheme || "light");

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
  };


  return (

    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyles />
        <Router>
          <Navbar onThemeChange={handleThemeChange} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </Router>
        </div>

    </ThemeProvider>

  );
}

export default App;
