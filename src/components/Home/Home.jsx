import React from 'react';
import { Link } from 'react-router-dom'; //navigate between pages

function Home() {
  return (
    <div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h1>HI I'M JING LI</h1>
      <p>A web and UI/UX designer.</p>
    </div>
  );
}

export default Home;
