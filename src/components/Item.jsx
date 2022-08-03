

const Item = ({ children, width }) => {
  return (
    <div className="inline-flex items-center justify-center h-full carousel-item" style={{ width: width }}>
      <div className="w-3/4 h-full bg-red-500">
        </div>
    </div>
  );
};

export default Item;
