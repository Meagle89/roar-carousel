import React from "react";

const Item = ({ children, width }) => {
  return (
    <div className="inline-flex items-center justify-center h-full carousel-item" style={{ width: width }}>
       { children }
    </div>
  );
};

export default Item;
