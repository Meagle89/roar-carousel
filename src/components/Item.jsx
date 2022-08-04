import PropTypes from 'prop-types';

const Item = ({ children, width }) => {
  return (
    <div className="inline-flex items-center justify-center h-full carousel-item" style={{ width: width }}>
       { children }
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
}

export default Item;
