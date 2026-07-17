import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useCart();

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="product-card">

      <span className="discount-badge">
        {discount}% OFF
      </span>

      <button
        className="wishlist-btn"
        onClick={() => addToWishlist(product)}
      >
        <FaHeart />
      </button>

      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >
        <img
          src={product.image}
          alt={product.name}
        />

        <h3>{product.name}</h3>

        <p className="brand">
          {product.brand}
        </p>

        <div className="rating-box">

          <FaStar />

          <span>{product.rating}</span>

          <small>
            ({product.reviews} Reviews)
          </small>

        </div>

        <p
          className={
            product.stock > 0
              ? "stock in-stock"
              : "stock out-stock"
          }
        >
          {product.stock > 0
            ? "In Stock"
            : "Out of Stock"}
        </p>

        <p className="price">
          ₹{product.price}

          <span>
            ₹{product.oldPrice}
          </span>

        </p>

      </Link>

      <button
        className="add-cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart />

        Add To Cart

      </button>

    </div>
  );
}

export default ProductCard;