import { isFavoriteState, setIsFavoriteState } from "..Card/Card"; // Импортируем компонент Card
import React, { useState} from "react";
import { Cards } from "../pages/Cards"; // Импортируем компонент Cards

export const Cart = ({ cartItems }) => {
  const itemCount = cartItems.length; // Вычисляем общее количество элементов
  return (
    <div>
      <h2>Корзина:</h2>
      cartItems.length === 0 ? (<p>Корзина пуста</p>)
      <p>Всего товаров: {itemCount}</p> // показывает счетчик
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const [cartItems, setCartItems] = useState([]);
const handleFavoriteChange = (updatedCard) => {
  if (updatedCard.isFavorite) {
    setIsFavoriteState([...isFavoriteState, updatedCard]);
  } else {
    setIsFavoriteState(
      isFavoriteState.filter((card) => card.id !== updatedCard.id)
    );
  }
};
const handleAddToCart = (card) => {
  setCartItems([...cartItems, card]);
  return (
    <div>
      <h1>Товары:</h1>
      <Cards
        data={data}
        onFavoriteChange={handleFavoriteChange}
        onAddToCart={handleAddToCart}
      />
      <h2>Корзина:</h2>
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
