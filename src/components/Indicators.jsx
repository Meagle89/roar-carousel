import React from 'react';
import PropTypes from 'prop-types';

const Indicators = ({ items, activeIndex, displayDots, styles }) => {
  return (
    <div className={`indicator ${styles}`}>
      {[...Array(displayDots)].map((dot, index) => {
        if (items > 1) {
          if (activeIndex < displayDots) {
            return <Dot active={activeIndex === index} key={index} />;
          } else {
            return <Dot active={activeIndex - displayDots === index} key={index} />;
          }
        }
        return null;
      })}
    </div>
  );
};

const Dot = ({ active, styles, activeStyles }) => <button className={`dot ${active ? activeStyles : styles}`}></button>;

Indicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  displayDots: PropTypes.number,
  items: PropTypes.number.isRequired,
  styles: PropTypes.string,
};

Indicators.defaultProps = {
  displayDots: 3,
  styles: "flex mx-auto overflow-hidden whitespace-nowrap w-fit relative -top-[50px]",
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
