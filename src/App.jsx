import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Scroll />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
