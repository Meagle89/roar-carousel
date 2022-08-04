import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { Prev, Next } from './Buttons';
import Indicators from './Indicators';
import ScrollBar from './ScrollBar';
import setOptions from '../helpers/setOptions';
import createBreakpointArray from '../helpers/createBreakpointArray';
import Item from './Item';

const Carousel = ({ children, options }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewport, setViewport] = useState(0);
  const [activeItems, setActiveItems] = useState(0);
  const ref = useRef(null);

  const updateIndex = useCallback((newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children) - activeItems) {
      newIndex = React.Children.count(children) - activeItems;
    }

    setActiveIndex(newIndex);
  },[activeItems, children]) 

  const updateActiveItems = useCallback((viewportWidth, breakpoints) => {
    if (breakpoints.length === 0) return setActiveItems(options.activeItems);

    breakpoints.forEach((breakpoint, index) => {
      if (index === 0 && viewportWidth < Object.keys(breakpoint)[0]) {
        setActiveItems(options.activeItems);
        return;
      }
      if (viewportWidth >= Object.keys(breakpoint)[0]) {
        setActiveItems(Object.values(breakpoint)[0]);
        updateIndex(activeIndex);
        return;
      } 
    });
  }, [ activeIndex, options.activeItems, updateIndex]) 

  const calculateMultiplier = () => 100 / activeItems;

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const renderIndicators = () => {
    if (options.displayIndicator)
      return <Indicators items={React.Children.count(children)} activeIndex={activeIndex} activeItems={activeItems} setActiveIndex={setActiveIndex} />;
  };

  const renderButtons = () => {
    if (options.displayButtons)
      return (
        <>
          <Prev updateIndex={updateIndex} index={activeIndex} />
          <Next updateIndex={updateIndex} index={activeIndex} />
        </>
      );
  };

  const renderScrollBar = () => {
    if (options.displayScrollBar)
      return <ScrollBar items={React.Children.count(children)} activeIndex={activeIndex} viewport={viewport} activeItems={activeItems} />;
  };

  useEffect(() => {
    const breakpointArr = createBreakpointArray(options.breakpoints);
    const w = window;

    setViewport(w.innerWidth);
    updateActiveItems(w.innerWidth, breakpointArr);

    w.onresize = (ev) => {
      setViewport(ev.target.innerWidth);
      updateActiveItems(ev.target.innerWidth, breakpointArr);
    };
  }, [options.activeItems, options.breakpoints, updateActiveItems]);

  return (
    <>
      <div {...handlers} className="relative h-full overflow-x-hidden carousel">
        <div
          ref={ref}
          className="h-full transition-all duration-300 inner whitespace-nowrap"
          style={{ transform: `translateX(-${activeIndex * calculateMultiplier()}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return <Item width={`${calculateMultiplier()}%`}> {child} </Item>;
          })}
        </div>
        {renderButtons()}
      </div>
      {renderIndicators()}
      {renderScrollBar()}
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  options: PropTypes.object,
};

Carousel.defaultProps = {
  options: setOptions(),
};

export default Carousel;
