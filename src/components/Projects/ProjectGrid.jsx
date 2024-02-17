import React, { useEffect, useRef } from 'react';
import Projects from './Projects';

const ProjectGrid = ({ projectsData }) => {
  const gridRef = useRef(null); // Reference to the project grid for scrolling control

  useEffect(() => {
    const handleScroll = () => {
      // Determine the page offset where horizontal scrolling should start.
      const gridOffsetTop = gridRef.current.offsetTop;
      const gridHeight = gridRef.current.scrollHeight;

      if (window.scrollY >= gridOffsetTop && window.scrollY <= gridOffsetTop + gridHeight) {
        // When within the bounds of the project grid, prevent default vertical scrolling
        // and programmatically scroll horizontally instead.
        document.body.style.overflow = 'hidden'; // Temporarily disable body scroll
        gridRef.current.scrollLeft += window.scrollY - gridOffsetTop;
      } else {
        document.body.style.overflow = ''; // Re-enable body scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={gridRef} className="projects-grid">
      <Projects projectsData={projectsData} />
    </div>
  );
};

export default ProjectGrid;
