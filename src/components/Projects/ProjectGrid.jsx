// ProjectGrid.jsx
import React, { useRef, useEffect } from 'react';
import './ProjectsGrid.css'; // Ensure this path is correct
import ProjectDisplay from '../Effects/ProjectDisplay.jsx'; // Adjust path as necessary

const ProjectGrid = ({ projectsData }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (gridRef.current) {
        gridRef.current.scrollLeft += e.deltaY;
      }
    };
  
    const grid = gridRef.current;
    grid.addEventListener('wheel', handleWheel);
  
    return () => grid && grid.removeEventListener('wheel', handleWheel);
  }, []);
  

  return (
    <div ref={gridRef} className="projects-grid">
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <ProjectDisplay {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
