import React from 'react';
import PropTypes from 'prop-types';

const Indicators = ({ items, activeIndex, activeItems, setActiveIndex, styles }) => {
  return (
    <div className={`indicator ${styles}`}>
      {[...Array((items - activeItems) + 1)].map((dot, index) => {
        if (items > 1) {
            return <Dot active={activeIndex === index} key={index} setActiveIndex={setActiveIndex} index={index} />;
        }
        return null;
      })}
    </div>
  );
};

const Dot = ({ active, styles, activeStyles, setActiveIndex, index }) => <button onClick={() => setActiveIndex(index) } className={`dot ${active ? activeStyles : styles}`}></button>;

Indicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  activeItems: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  styles: PropTypes.string,
};

Indicators.defaultProps = {
  styles: "flex mx-auto overflow-hidden whitespace-nowrap w-fit relative my-5",
};

Dot.propTypes = {
  active: PropTypes.bool.isRequired,
  styles: PropTypes.string,
  activeStyles: PropTypes.string,
};

Dot.defaultProps = {
  styles: 'mx-2 w-2 h-2 rounded-full bg-slate-400/[0.3]',
  activeStyles: 'mx-2 w-3 h-3 bg-slate-600 rounded-full',
};

export default Indicators;
