import React from 'react';
import PropTypes from 'prop-types';

export const Prev = ({ updateIndex, index, styles, icon }) => (
  <button className={`prev ${styles}`} onClick={() => updateIndex(index - 1)}>
    {icon ? icon : 'Prev'}
  </button>
);

export const Next = ({ updateIndex, index, styles, icon }) => (
  <button className={`next ${styles}`} onClick={() => updateIndex(index + 1)}>
    {icon ? icon : 'Next'}
  </button>
);

Next.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  styles: PropTypes.string,
  icon: PropTypes.element,
}

Prev.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  styles: PropTypes.string,
  icon: PropTypes.element,
}

Next.defaultProps = {
  styles: "absolute right-4 top-1/2 w-fit h-fit bg-gray-300 cursor-pointer ",
  icon: null,
}

Prev.defaultProps = {
  styles: "absolute left-4 top-1/2 w-fit h-fit bg-gray-300 cursor-pointer",
  icon: null,
}
