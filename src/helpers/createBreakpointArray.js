const createBreakpointArray = (breakpoints) => {
  if (breakpoints === undefined || breakpoints === null) {
    return null;
  }

  const breakpointArr = [];

  Object.keys(breakpoints).forEach((breakpoint) => {
    breakpointArr.push({ [breakpoint]: breakpoints[breakpoint] });
  });

  return breakpointArr;
};

export default createBreakpointArray;