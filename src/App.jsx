import './assets/style.scss';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import StudyCase from './components/StudyCase';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="" id={theme}>
        <h1 className="agency">THE AGENCY</h1>
        <div className='switch'>
          <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </div>
        <div className="container">
          <Navbar />
          <div className="container-small">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:path" element={<StudyCase />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
