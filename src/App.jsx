import React, { useState } from "react";
import "./App.css";

function App() {
  const plants = [
    { id: 1, name: "Aloe Vera", category: "Medicinal", price: 500, image: "/images/aloe.png" },
    { id: 2, name: "Rose", category: "Beautiful", price: 300, image: "/images/rose.png" },
    { id: 3, name: "Tulsi", category: "Medicinal", price: 200, image: "/images/tulsi.png" },
    { id: 4, name: "Orchid", category: "Beautiful", price: 800, image: "/images/orchid.png" },
    { id: 5, name: "Cactus", category: "Succulent", price: 400, image: "/images/cactus.png" },
  ];

  const categories = ["All", "Medicinal", "Beautiful", "Succulent"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredPlants =
    selectedCategory === "All"
      ? plants
      : plants.filter((p) => p.category === selectedCategory);

  const addToCart = (plant) => setCart([...cart, plant]);

  return (
    <div className="app">
      <h1>🌱 Plant Store</h1>

      {/* Category Filter */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Plant Grid */}
      <div className="plant-grid">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img
              src={plant.image}
              alt={plant.name}
              className="plant-img"
            />
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p className="price">Rs.{plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />
                <span>{item.name} - Rs.{item.price}</span>
              </li>
            ))}
            <li className="total">
              <span>Total</span>
              <span>Rs.{cart.reduce((sum, p) => sum + p.price, 0)}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
