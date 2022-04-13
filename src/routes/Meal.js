/* eslint-disable react/jsx-boolean-value, no-alert, no-console */

import '../App.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Meal() {
  const mealName = useParams();
  const postUrl = '/search';
  const body = { meal_name: mealName.name };
  const [meal, setMeal] = useState();

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
        setMeal(data);
        console.log(meal);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <h1>{mealName.name}</h1>
      </div>
    </>
  );
}

export default Meal;
