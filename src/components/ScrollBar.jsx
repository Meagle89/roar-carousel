import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollBar = ({ items, styles, activeIndex, viewport, activeItems }) => {
  const [width, setWidth] = useState(0);
  const scrollTrack = useRef(null);

  useEffect(() => {
    setWidth(scrollTrack.current.offsetWidth / (items / activeItems) );
  }, [items, viewport, activeItems]);

  const inlineStyles = {
    width: `${Math.ceil(width)}px`,
    transform: `translateX(${activeIndex * (100 / activeItems)}%)`,
  };

  return (
    <div className="mx-auto scrollbar" style={{ width: `${Math.floor((viewport / 3) * 2)}px` }}>
      <div ref={scrollTrack} className={`scrollbar-track ${styles.track}`}>
        <div className={`scrollbar-thumb transition-transform duration-300 ${styles.thumb}`} style={inlineStyles}></div>
      </div>
    </div>
  );
};

ScrollBar.propTypes = {
  items: PropTypes.number.isRequired,
  styles: PropTypes.objectOf(PropTypes.string),
  activeIndex: PropTypes.number.isRequired,
  viewport: PropTypes.number.isRequired,
  activeItems: PropTypes.number.isRequired,
};

ScrollBar.defaultProps = {
  styles: {
    track: 'w-full rounded-sm bg-black h-[2px] relative flex justify-start -top-[50px]',
    thumb: 'h-full rounded-sm bg-[#f7f7f7]',
  },
};

export default ScrollBar;
