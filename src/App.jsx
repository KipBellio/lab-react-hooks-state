import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Shopping cart state
  const [cartItems, setCartItems] = useState([]);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  // Add products to cart
  const addToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product]);
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      <h1>🛒 Shopping App</h1>

      <p>Welcome! Shop for your favourite grocery products.</p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={toggleDarkMode}
      />

      <div className="filter-section">
        <label htmlFor="category-filter">
          Filter by Category:{" "}
        </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      <Cart items={cartItems} />
    </div>
  );
};

export default App;