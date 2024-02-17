import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggle} style={{ cursor: 'pointer', width: '100%', textAlign: 'left' }}>
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: '0 15px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
