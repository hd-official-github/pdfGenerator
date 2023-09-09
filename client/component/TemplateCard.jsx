// TemplateCard.js
import React from 'react';

const TemplateCard = ({ name, onSelect }) => {
  return (
    <div className="template-card" onClick={onSelect}>
      <h3>{name}</h3>
    </div>
  );
};

export default TemplateCard;