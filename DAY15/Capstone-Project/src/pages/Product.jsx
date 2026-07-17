import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaBolt,
} from "react-icons/fa";

function Product() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart, addToWishlist } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 style={{ padding: "50px" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <div className="product-image">

        <img src={product.image} alt={product.name} />

      </div>

      <div className="product-info">

        <h1>{product.name}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐
        </div>

        <h2 className="product-price">
          ₹{product.price}
          <span> ₹{product.oldPrice}</span>
        </h2>

        <p className="description">
          This is a premium quality product designed for
          everyday use. High quality, durable and trusted by
          thousands of customers.
        </p>
        <div className="qty-selector">

          <button
            onClick={() =>
              qty > 1 && setQty(qty - 1)
            }
          >
            -
          </button>

          <span>{qty}</span>

          <button
            onClick={() =>
              setQty(qty + 1)
            }
          >
            +
          </button>

        </div>
        <div className="btn-group">

          <button
            className="cart-btn"
            onClick={() => {

              for (let i = 0; i < qty; i++) {

                addToCart(product);

              }

            }}
          >

            Add To Cart

          </button>
          <button
            className="wishlist-btn2"
            onClick={() =>
              addToWishlist(product)
            }
          >

            Add To Wishlist

          </button>

          <button className="buy-btn">
            <FaBolt />
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Product;