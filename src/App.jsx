import './assets/style.scss';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
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
      <div className="App" id={theme}>
        <div className='switch'>
          <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} ></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
