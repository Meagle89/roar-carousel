
const setOptions = (options = {}) => ({
  activeItems: options.activeItems || 6,
  displayButtons: options.displayButtons || true,
  displayScrollBar: options.displayScrollBar || true,
  displayIndicator: options.displayIndicator || false,
  nextButtonStyle: options.nextButtonStyle || null,
  prevButtonStyle: options.prevButtonStyle || null,
  infiniteScroll: options.infiniteScroll || false,
  scrollBarStyles: options.scrollBarStyles || null,
  indicatorStyles: options.indicatorStyles || null,
  dotStyles: options.dotStyles || null,
});

export default setOptions;
