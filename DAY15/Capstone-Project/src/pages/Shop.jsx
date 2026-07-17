import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/cards/ProductCard";
import { useSearchParams } from "react-router-dom";

function Shop() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(60000);

  let filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    const matchPrice = product.price <= maxPrice;

    return matchSearch && matchCategory && matchPrice;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="shop-page">

      <h1>Our Products</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Accessories</option>
          <option>Furniture</option>
          <option>Mobiles</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

        <div className="price-filter">

          <label>

            Max Price : ₹{maxPrice}

          </label>

          <input
            type="range"
            min="500"
            max="60000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

        </div>
        <button
          className="clear-btn"
          onClick={() => {
            setSearch("");
            setCategory("All");
            setSort("");
            setMaxPrice(60000);
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="product-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="empty-products">
            <h2>No Products Found</h2>
            <p>
              Try another search or category.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Shop;