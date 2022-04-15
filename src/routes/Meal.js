/* eslint-disable react/jsx-boolean-value, no-alert, no-console */

import '../App.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Meal() {
  const params = useParams();
  const mealId = params.id;
  const postUrl = '/searchById';
  const body = { meal_id: mealId };
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMeal(data[0]);
        console.log(data[0]);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div>
          <div className="info">
            <h2>{meal.strMeal}</h2>
          </div>

          <div className="meal_image">
            <img className="poster" src={meal.strMealThumb} width={350} height={400} alt="Recipe Thumbnail" />
          </div>

          <div className="meal_details">
            <p>{meal.strInstructions}</p>
          </div>

          <div className="youtube_link">
            <a href={meal.strYoutube} target="_blank" rel="noreferrer"><h3>Video Tutorial</h3></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meal;
