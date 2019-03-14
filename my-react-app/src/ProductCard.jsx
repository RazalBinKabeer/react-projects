import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ productName, price, initialStock }) => {
  const [stock, setStock] = useState(initialStock);
  return (
    <div>
      <h4>Product: {productName}</h4>
      <h5>Price: {price}</h5>
      <h5>Stock left: {stock}</h5>

      {stock === 0 && <p style={{ color: "red" }}>Out of Stock</p>}
      <button disabled={stock === 0} onClick={() => setStock(stock - 1)}>
        Buy Now
      </button>

      <button disabled={stock > 0} onClick={() => setStock(15)}>
        Add More Stock
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number,
  initialStock: PropTypes.number,
};

ProductCard.defaultProps = {
  productName: "No Product",
  price: 0,
  initialStock: 0,
};

export default ProductCard;
