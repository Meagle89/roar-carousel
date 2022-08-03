
const setOptions = (options = {}) => ({
  activeItems: options.activeItems || 3,
  displayButtons: options.displayButtons || true,
  displayScrollBar: options.displayScrollBar || false,
  displayIndicator: options.displayIndicator || true,
  nextButtonStyle: options.nextButtonStyle || null,
  prevButtonStyle: options.prevButtonStyle || null,
  infiniteScroll: options.infiniteScroll || false,
  scrollBarStyles: options.scrollBarStyles || null,
  indicatorStyles: options.indicatorStyles || null,
  dotStyles: options.dotStyles || null,
});

export default setOptions;
