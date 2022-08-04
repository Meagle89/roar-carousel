const setOptions = (options = {}) => ({
  activeItems: options.activeItems || 1,
  displayButtons: options.displayButtons || true,
  displayScrollBar: options.displayScrollBar || false,
  displayIndicator: options.displayIndicator || true,
  nextButtonStyle: options.nextButtonStyle || null,
  prevButtonStyle: options.prevButtonStyle || null,
  infiniteScroll: options.infiniteScroll || false,
  scrollBarStyles: options.scrollBarStyles || null,
  indicatorStyles: options.indicatorStyles || null,
  dotStyles: options.dotStyles || null,
  breakpoints: {
    768: 2,
    1024: 3},
});



export default setOptions;

