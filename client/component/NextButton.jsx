import React from 'react';

const NextButton = ({ selectedTemplate }) => {
  return (
    <div className="next-button">
      <h4>Selected Template: {selectedTemplate}</h4>
      <button>Next</button>
    </div>
  );
};

export default NextButton;