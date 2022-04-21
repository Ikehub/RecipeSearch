import React, { useEffect, useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

function MealCard(props) {
  const { meal, search, onDelete } = props;
  const url = `/meal/${meal.idMeal}`;
  const meal_id = meal.idMeal;
  const email = sessionStorage.getItem("email");
  const body = {
    idMeal: meal_id,
    email: email,
    strMealThumb: meal.strMealThumb,
    strMeal: meal.strMeal,
    strInstructions: meal.strInstructions,
  };
  const [isfavorites, setisFavorites] = useState(true);

  useEffect(() => {
    Favorites();
  }, []);

  function addToFavorites() {
    console.log("button clicked");
    fetch("/add", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    setisFavorites(true);
  }

  function deleteFavorites() {
    console.log("button clicked");
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({ email: email, idMeal: meal_id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    if (search) {
      setisFavorites(false);
    } else {
      onDelete();
    }
  }

  function Favorites() {
    fetch("/is_favorites", {
      method: "POST",
      body: JSON.stringify({ email: email, idMeal: meal_id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setisFavorites(data.is_favorites);
      });
  }

  return (
    <div className="card v4 tight">
      <div className="wrapper">
        <div className="image">
          <div className="posterThumb">
            <a className="result" href={url}>
              <img
                loading="lazy"
                className="posterThumb"
                src={`${meal.strMealThumb}/preview`}
                alt="Recipe Thumbnail"
              />
            </a>
          </div>
        </div>
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <div>
                <a className="result" href={url}>
                  <h2>{meal.strMeal}</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="overview">
            <p>{meal.strInstructions}</p>
          </div>
          {isfavorites ? (
            <button
              type="button"
              id="favorites"
              onClick={() => deleteFavorites()}
            >
              Delete Meal
            </button>
          ) : (
            <button
              type="button"
              id="favorites"
              onClick={() => addToFavorites()}
            >
              Add To Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
MealCard.propTypes = {
  meal: PropTypes.shape.isRequired,
};

export default MealCard;
