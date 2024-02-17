import React from 'react';
import Collapsible from '../effects/Collapsible.jsx';

function Projects() {
  return (
    <div>
      <h1>What I do</h1>
      <p>This is the projects page.</p>
      <Collapsible title="Web Design">
        <p>Details about project 1</p>
      </Collapsible>
      <Collapsible title="UI/UX Design">
        <p>Details about project 1</p>
      </Collapsible>
      <Collapsible title="Accessibility">
        <p>Details about project 1</p>
      </Collapsible>
      <Collapsible title="Project 1">
        <p>Details about project 1</p>
      </Collapsible>
      
      
    </div>
  );
}

export default Projects;
