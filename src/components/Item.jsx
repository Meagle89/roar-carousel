

const Item = ({ children, width }) => {
  return (
    <div className="carousel-item inline-flex items-center justify-center h-full bg-slate-600" style={{ width: width }}>
      {children}
    </div>
  );
};

export default Item;
