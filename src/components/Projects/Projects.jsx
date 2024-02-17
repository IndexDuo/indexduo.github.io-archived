import React from 'react';
import Collapsible from '../effects/Collapsible/Collapsible.jsx';

function Projects() {
  return (
    <div>
      <h1>What I do</h1>
      <p>This is the projects page.</p>
      <Collapsible title="Web Design">
        <p>Details</p>
      </Collapsible>
      <Collapsible title="Web Development">
        <p>Details</p>
      </Collapsible>
      <Collapsible title="UI/UX Design">
        <p>Details</p>
      </Collapsible>
      <Collapsible title="Accessibility">
        <p>Details</p>
      </Collapsible>
      
      
      
    </div>
  );
}

export default Projects;
