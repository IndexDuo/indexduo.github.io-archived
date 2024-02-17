import logo from './logo.svg';
import './App.css';
import { Link, Element } from 'react-scroll'; //import link and element to scroll to different sections of the page

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //import browser router to navigate between pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NotFoundPage from './components/errorPage/NotFoundPage';

function App() {
  return (
    
    <div>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
      <Router>
            <Routes>
              
                {/* Define existing routes here */}
                
                {/* Catch-all route for undefined paths */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
