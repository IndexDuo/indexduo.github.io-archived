import React from 'react';
import Collapsible from '../Effects/Collapsible/Collapsible.jsx';
import ProjectDisplay from '../Effects/ProjectDisplay/ProjectDisplay.jsx';

const projectsData = [
  {
    image: { src: 'path/to/project1.png', link: 'http://project1.com' },
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    tags: ['React', 'HTML', 'CSS'],
  },
  {
    image: { src: 'path/to/project2.png', link: 'http://project2.com' },
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    tags: ['UI/UX', 'Accessibility'],
  },
  // Add more projects as needed
];

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
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projectsData.map((project, index) => (
          <ProjectDisplay key={index} {...project} />
        ))}
      </div>
      
    </div>
  );
}

export default Projects;
