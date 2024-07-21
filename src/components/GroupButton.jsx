import React from 'react';
import PropTypes from 'prop-types';

const GroupButton = ({ buttons, onButtonClick }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(button.value)}
          className={`px-4 py-2 text-sm font-medium text-white border ${
            index === 0
              ? 'border-gray-200 rounded-s-lg'
              : index === buttons.length - 1
              ? 'border-gray-200 rounded-e-lg'
              : 'border-t border-b border-gray-200'
          } hover:bg-opacity-90 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white`}
          style={{ backgroundColor: button.color || 'gray' }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

GroupButton.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default GroupButton;
