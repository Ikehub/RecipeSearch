import React, { useState, useEffect } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

function Meal() {
  const [food, setFood] = useState([]);

  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data.meals);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <>
      <div className="button">
        <button type="button" onClick={() => fetchFood()} className="btn"> Generate Meal </button>
      </div>
      <section className="meals">
        {food.map((f) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
          } = f;

          return (
            <article key={idMeal}>
              <div>
                <h2 className="text-2xl">
                  <span className="font-bold"> Name:</span>
                  {strMeal}
                </h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Meal;
