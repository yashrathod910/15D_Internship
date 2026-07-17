import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About ShopEase</h1>
        <p>
          ShopEase is your trusted online shopping destination offering
          quality products, affordable prices, and a seamless shopping
          experience.
        </p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>

        <p>
          Founded with a vision to make online shopping simple and
          accessible, ShopEase brings together the latest electronics,
          fashion, accessories, and lifestyle products in one place.
        </p>

        <p>
          Our goal is to provide customers with the best shopping
          experience through quality products, fast delivery, and
          excellent customer support.
        </p>
      </section>

      <section className="features">

        <div className="feature-card">
          <FaShippingFast />
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery across India.</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt />
          <h3>Secure Shopping</h3>
          <p>Safe payments and trusted transactions.</p>
        </div>

        <div className="feature-card">
          <FaHeadset />
          <h3>24/7 Support</h3>
          <p>Friendly customer support whenever you need help.</p>
        </div>

      </section>

    </div>
  );
}

export default About;