import React from "react";

const Indicators = ({ children }) =>  (
    <div className="indicator">
      {React.Children.map(children, (child, index) => (
        <Dot />
      ))}
    </div>
  );

  const Dot = ({activeIndex, index, updateIndex,}) => (
    <button className="dot rounded-full w-2 h-2 bg-slate-400"></button>
  );

export default Indicators