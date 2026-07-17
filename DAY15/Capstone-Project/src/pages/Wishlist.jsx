import { useCart } from "../context/CartContext";

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist,
  } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Wishlist is Empty ❤️</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Wishlist</h1>

      {
        wishlist.map((item) => (

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

            <button
              className="remove-btn"
              onClick={() =>
                removeFromWishlist(item.id)
              }
            >
              Remove
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default Wishlist;