import React, { useState, useRef, useEffect } from 'react';
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <span className={`arrow ${isOpen ? 'down' : 'up'}`}></span>
      </button>
      <div ref={contentRef} className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;