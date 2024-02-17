import React, { useState } from 'react';
import styles from './Collapsible.module.css';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggle} className={styles.collapsibleButton}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.contentContainer}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
