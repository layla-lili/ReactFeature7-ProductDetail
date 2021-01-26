// Styling

import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <ProductWrapper>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} USD</p>
      <img
        src={product.image}
        alt={product.name}
        onClick={() => setProduct(product)}
      />
      <br />
    </ProductWrapper>
  );
};

export default ProductItem;
