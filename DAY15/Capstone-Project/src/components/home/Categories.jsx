import { Link } from "react-router-dom";
import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaCouch,
  FaClock,
  FaGamepad,
  FaHeadphones,
} from "react-icons/fa";

import { GiRunningShoe } from "react-icons/gi";

function Categories() {
  const categories = [
    {
      name: "Fashion",
      icon: <FaTshirt />,
    },

    {
      name: "Shoes",
      icon: <GiRunningShoe />,
    },

    {
      name: "Electronics",
      icon: <FaLaptop />,
    },

    {
      name: "Mobiles",
      icon: <FaMobileAlt />,
    },

    {
      name: "Watches",
      icon: <FaClock />,
    },

    {
      name: "Furniture",
      icon: <FaCouch />,
    },

    {
      name: "Accessories",
      icon: <FaHeadphones />,
    },

    {
      name: "Toys",
      icon: <FaGamepad />,
    },
  ];

  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <div className="category-grid">

        {categories.map((item, index) => (

          <Link
            key={index}
            to="/shop"
            className="category-card"
          >
            <div className="category-icon">

              {item.icon}

            </div>

            <h3>{item.name}</h3>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default Categories;