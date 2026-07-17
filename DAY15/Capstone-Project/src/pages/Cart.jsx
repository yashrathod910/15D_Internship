import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {
        cart.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-info">

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

            </div>

            <div className="qty-box">

              <button
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>

            </div>

            <h3>

              ₹{item.price * item.quantity}

            </h3>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>

        ))
      }

      <div className="cart-total">

        <h2>

          Total : ₹{total}

        </h2>

      </div>

      <div className="checkout-btn-box">
        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed To Checkout
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Cart;