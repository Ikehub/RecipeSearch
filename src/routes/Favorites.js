/* eslint-disable react/jsx-boolean-value, no-alert, no-console */
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MealCard from '../components/MealCard';

function Favorites() {
  const email = sessionStorage.getItem('email');
  const body = { email };
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/get_all_meals', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        console.log(data);
      });
  }, []);

  function handleDelete(i) {
    setFavorites([...favorites.slice(0, i), ...favorites.slice(i + 1)]);
  }

  function renderMealCard(meal, i) {
    return (
      <MealCard meal={meal} onDelete={() => handleDelete(i)} search={false} />
    );
  }

  return (
    <div>
      <NavBar />
      <h2>My Favorites List!</h2>
      {favorites.map((meal, index) => renderMealCard(meal, index))}
    </div>
  );
}
export default Favorites;
