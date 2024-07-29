import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button onClick={toggleCollapse}>{title}</button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;