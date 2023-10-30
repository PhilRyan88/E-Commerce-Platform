import "./ProductCard.css";
import AddtoCart from "./AddtoCart";
function ProductCard({ product }) {
  return (
    <div className="product">
      <div className="title">{product.title}</div>
      <div> {product.price.value}</div>
      <AddtoCart />
      <marquee wdith="1368" height="20" scrollamount="10" bgcolor="aqua">
        Hurry up! Limited offer of {product.title} ends soon!
      </marquee>
    </div>
  );
}

export default ProductCard;

// use  {} when u want to write js inside jsx
