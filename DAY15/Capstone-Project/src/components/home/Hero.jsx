import { Link } from "react-router-dom";
import hero from "/src/assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Big Fashion Sale</h1>

        <h2>Up To 60% OFF</h2>

        <p>
          Discover the latest fashion trends and shop your
          favorite brands at unbeatable prices.
        </p>

        <Link to="/shop">
          <button>Shop Now</button>
        </Link>

      </div>

      <div className="hero-right">

        <img
          src={hero}
          alt="Fashion"
        />

      </div>

    </section>
  );
}

export default Hero;