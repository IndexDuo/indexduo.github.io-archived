import React from 'react';
import Collapsible from '../Effects/Collapsible/Collapsible.jsx';
import ProjectGrid from './ProjectGrid.jsx'; // Update the import to reflect the new file name
import './ProjectsGrid.css'; 

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
  {image: { src: 'path/to/project3.png', link: 'http://project3.com' },
    title: 'Project 3',
    description: 'A brief description of Project 3.',
    tags: ['Web Design', 'Web Development'],
  },
  {image: { src: 'path/to/project4.png', link: 'http://project4.com' },
    title: 'Project 4',
    description: 'A brief description of Project 4.',
    tags: ['React', 'HTML', 'CSS'],
  },
  {image: { src: 'path/to/project5.png', link: 'http://project5.com' },
    title: 'Project 5',
    description: 'A brief description of Project 5.',
    tags: ['UI/UX', 'Accessibility'],
  },
  {image: { src: 'path/to/project6.png', link: 'http://project6.com' },
    title: 'Project 6',
    description: 'A brief description of Project 6.',
    tags: ['Web Design', 'Web Development'],
  },
  {image: { src: 'path/to/project7.png', link: 'http://project7.com' },
    title: 'Project 7',
    description: 'A brief description of Project 7.',
    tags: ['React', 'HTML', 'CSS'],
  },
  {image: { src: 'path/to/project8.png', link: 'http://project8.com' },  
    title: 'Project 8',
    description: 'A brief description of Project 8.',
    tags: ['UI/UX', 'Accessibility'],
  },

  // Add more projects as needed
];

function Projects() {
  return (
    <div>
      <h1>What I Do</h1>
      <Collapsible title="Web Design">
        <p>Details about Web Design...</p>
      </Collapsible>
      <Collapsible title="Web Development">
        <p>Details about Web Development...</p>
      </Collapsible>
      <Collapsible title="UI/UX Design">
        <p>Details about UI/UX Design...</p>
      </Collapsible>
      <Collapsible title="Accessibility">
        <p>Details about Accessibility...</p>
      </Collapsible>

      <div style={{ height: '2000px', background: '#f8f9fa' }}>
        Tall Footer for Scrolling
      </div>
      
      <ProjectGrid projectsData={projectsData} />

      {/* Tall footer for testing scrolling */}
      <div style={{ height: '2000px', background: '#f8f9fa' }}>
        Tall Footer for Scrolling
      </div>
      
    </div>
  );
}

export default Projects;
