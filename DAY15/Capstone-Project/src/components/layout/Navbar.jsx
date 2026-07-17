import { NavLink, Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart, wishlist } = useCart();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">ShopEase</Link>
      </div>


      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>


      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => {
          navigate(`/shop?search=${searchText}`)
        }}>
          Search
        </button>
      </div>

      <nav className={open ? "mobile-open" : ""}>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/shop">Shop</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </nav>

      <div className="nav-icons">

        <Link to="/wishlist" className="icon">

          <FaHeart />

          <span>{wishlist.length}</span>

        </Link>

        <Link to="/cart" className="icon">

          <FaShoppingCart />

          <span>{totalItems}</span>

        </Link>

        <Link to="/login" className="user-btn">

          <FaUserCircle />

          <span>Login</span>

        </Link>


      </div>

    </header>
  );
}

export default Navbar;