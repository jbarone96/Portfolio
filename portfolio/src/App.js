import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
