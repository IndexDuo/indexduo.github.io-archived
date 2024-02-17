import logo from './logo.svg';
import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //import browser router to navigate between pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">Home Section Content</section>
      <section id="about">About Section Content</section>
      <section id="projects">Projects Section Content</section>
      <section id="contact">Contact Section Content</section>
    </div>
  );
}

export default App;
