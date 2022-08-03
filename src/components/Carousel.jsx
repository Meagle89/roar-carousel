import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import {Prev, Next} from './Buttons';
import Indicators from './Indicators';
import ScrollBar from './ScrollBar';
import options from '../helpers/default-options';

const Carousel = ({ children, options }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [viewport, setViewport] = useState(0);
  const ref = useRef(null);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const renderIndicators = () => {
    if ( options.displayIndicator) return <Indicators />
  }

  const renderButtons = () => {
    if (options.displayButtons) return ( <> <Prev updateIndex={updateIndex} index={activeIndex} /> <Next updateIndex={updateIndex} index={activeIndex} /> </>)
  }

  const renderScrollBar = () => {
    if (options.displayScrollBar) return <ScrollBar items={React.Children.count(children)} activeIndex={activeIndex} viewport={viewport} />
  }

  useEffect(() => {
    const w = window;
    setWidth(ref.current.scrollWidth);
    setViewport(w.innerWidth);

    w.onresize = (ev) => setViewport(ev.target.innerWidth);
  }, [])

  return (
    <div {...handlers} className="relative h-full overflow-hidden carousel">
      <div ref={ref} className="h-full transition-all duration-300 inner whitespace-nowrap" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
        {renderButtons()}
        {renderIndicators()}
        {renderScrollBar()}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  options: PropTypes.object,
}

Carousel.defaultProps = {
  options: options
}

export default Carousel;
