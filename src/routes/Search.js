/* eslint-disable react/jsx-boolean-value, no-alert, no-console */

import '../App.css';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MealCard from '../components/MealCard';

function Meal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mealName = searchParams.get("q");
  const postUrl = '/searchMeal';
  const body = { meal_name: mealName };
  const [meals, setMeals] = useState([]);

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
        setMeals(data);
        console.log(data);
      });
  }, []);

  function renderMealCard(meal, index) {
    return (
      <MealCard
        meal={meal}
      />
    );
  }

  return (
    <div className="mainbody">
      <NavBar />
      <div className='searchbody'>
        <section className="panel">
          <div className="search_results_meal">
            {meals.map((meal, index) => (
              renderMealCard(meal, index)
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Meal;
