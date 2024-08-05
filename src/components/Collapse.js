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
      contentRef.current.classList.add('open');
    } else {
      contentRef.current.style.maxHeight = '0px';
      contentRef.current.classList.remove('open');
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
      <div ref={contentRef} className="collapse-content">
        {children}
      </div>
    </div>
  );
};

export default Collapse;