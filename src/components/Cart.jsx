import React from "react";

const Cart = ({ items = [] }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      <p>
        Cart Total: {items.length} {items.length === 1 ? "item" : "items"}
      </p>

      <ul>
        {items.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;