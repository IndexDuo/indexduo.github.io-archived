
import React from 'react';

const ProjectDisplay = ({ image, title, description, tags }) => {
  return (
    <div style={{ margin: '10px' }}>
      <a href={image.link} target="_blank" rel="noopener noreferrer">
        <img src={image.src} alt={title} style={{ width: '100%', height: 'auto' }} />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index} style={{ marginRight: '5px', padding: '2px 5px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
