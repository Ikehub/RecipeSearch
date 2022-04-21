/* eslint-disable react/jsx-boolean-value, no-alert, no-console, no-nested-ternary */

import "../App.css";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import MealCard from "../components/MealCard";

function Meal() {
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
  const searchParam = searchParams.get("q");
  const mealUrl = "/searchMeal";
  const ingredientUrl = "/searchIngredients";
  const mealBody = { meal_name: searchParam };
  const [meals, setMeals] = useState([]);
  const [mealsIng, setMealsIng] = useState([]);
  const [showMeal, setShowMeal] = useState(true);

  useEffect(() => {
    fetch(mealUrl, {
      method: "POST",
      body: JSON.stringify(mealBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        console.log(data);
      });

    fetch(ingredientUrl, {
      method: "POST",
      body: JSON.stringify({ ingredient: searchParam }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMealsIng(data);
        console.log(data);
      });
  }, []);

  function renderMealCard(meal) {
    return <MealCard meal={meal} onDelete={null} search={true} />;
  }

  function setSelected(option) {
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    if (option) {
      option2.classList.remove("selected");
      option1.classList.add("selected");
      setShowMeal(true);
    } else {
      option1.classList.remove("selected");
      option2.classList.add("selected");
      setShowMeal(false);
    }
  }

  return (
    <div className="mainbody">
      <NavBar />
      <div className="column_wrapper reverse">
        <div className="content_wrapper">
          <div className="grey_column">
            <div className="settings_panel no_margin">
              <h3 className="background_color light_blue">Search Results</h3>
              <div id="search_menu_scroller">
                <ul className="settings panel with_counts scroller">
                  <li
                    id="option1"
                    className="selected"
                    onClick={() => setSelected(true)}
                    aria-hidden="true"
                  >
                    <button
                      id="meal"
                      className="search_tab active link-button"
                      title="Meal"
                      type="button"
                    >
                      Meal
                    </button>
                    <span>{meals === null ? 0 : meals.length}</span>
                  </li>
                  <li
                    id="option2"
                    className=""
                    onClick={() => setSelected(false)}
                    aria-hidden="true"
                  >
                    <button
                      id="ingredient"
                      className="search_tab link-button"
                      title="Ingredient"
                      type="button"
                    >
                      Ingredient
                    </button>
                    <span>{mealsIng === null ? 0 : mealsIng.length}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="white_column">
            <section className="panel">
              <div className="search_results_meal">
                {showMeal ? (
                  meals === null ? (
                    <h1>
                      {"No results for "}
                      {searchParam}
                    </h1>
                  ) : (
                    meals.map((meal, index) => renderMealCard(meal, index))
                  )
                ) : mealsIng === null ? (
                  <h1>
                    {"No results for "}
                    {searchParam}
                  </h1>
                ) : (
                  mealsIng.map((meal, index) => renderMealCard(meal, index))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meal;
