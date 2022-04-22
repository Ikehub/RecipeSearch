/* eslint-disable react/jsx-boolean-value, no-alert, no-console */
import '../App.css';
import '../style.css';
import React, { useState, useEffect, useRef } from 'react';
import chicken from '../stuff/chicken.jpg';
import beef from '../stuff/beef.jpg';
import potatoes from '../stuff/potatoes.jpg';
import NavBar from '../components/NavBar';

function Home() {
  const name = sessionStorage.getItem('name');
  const imageUrl = sessionStorage.getItem('imageUrl');
  const postUrl = '/random';

  const recentlyViewedDefault = [
    {
      title: 'Chicken Parmigiana',
      summary: 'Chicken parmigiana, or chicken parmesan, is a dish that consists of breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese.',
      image: chicken,
    },
    {
      title: 'Beef Stroganoff',
      summary: 'Beef Stroganoff or Beef Stroganov is originally a Russian dish of sauteed pieces of beef served in a sauce of mustard and smetana.',
      image: beef,
    },
    {
      title: 'Mashed Potatoes',
      summary: 'Mashed potato, mashed potatoes or mashed taters, colloquially known as mash, is a dish made by mashing boiled potatoes, usually with added milk, butter, salt and pepper.',
      image: potatoes,
    },
  ];

  const favoritesDefault = [{ title: 'Chicken Parmigiana' }, { title: 'Beef Stroganoff' }, { title: 'Mashed Potatoes' }, { title: 'Butternut Squash Soup' }];
  const [randomMeal, setRandomMeal] = useState({});
  const [recentlyViewed, setRecentlyViewed] = useState(null);
  const username = useRef(name);
  const [favoriteRecipes, setFavoriteRecipes] = useState(null);
  useEffect(() => {
    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((meals) => {
        setRandomMeal(meals[0]);
        console.log(meals[0]);
      });
  }, []);

  function rvDiv(recipe) {
    return (
      <div id="recently_viewed_div" className="">
        <img id="image" alt="recipe" src={recipe.image} />
        <div style={{ position: 'absolute', display: 'inline', left: '35%' }}>
          <h1 id="recipe-title" style={{ fontSize: '17px', fontFamily: 'Arial', fontWeight: '500' }}>{recipe.title}</h1>
          <h1 style={{
            fontSize: '15px', marginLeft: '15px', marginRight: '15px', fontFamily: 'Arial', fontWeight: '300',
          }}
          >
            {recipe.summary}
          </h1>
        </div>
      </div>
    );
  }

  function favDiv(recipe) {
    return (
      <div id="favorites_div" className="">
        <h1 id="favorite_recipe_title" style={{ fontSize: '16px' }}>{recipe.title}</h1>
      </div>
    );
  }

  useEffect(() => {
    setRecentlyViewed(recentlyViewedDefault.map(rvDiv));
    setFavoriteRecipes(favoritesDefault.map(favDiv));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div id="main-body" className="parent default">
        <div id="body-1" className="child default">
          <div style={{
            position: 'absolute', width: '93%', height: '93%', margin: '3%', borderRadius: '3px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
          }}
          />
          <h1 id="recipe_of_day" className="">Recipe of the Day</h1>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '30px', fontWeight: '400' }}>{randomMeal.strMeal}</h1>
          <div id="image_recipe_of_day" className="">
            <img alt="recipe of the day" src={randomMeal.strMealThumb} style={{ width: '100%', height: '100%', borderRadius: '2px' }} />
          </div>
          <button id="favorites" type="button">ADD TO FAVORITES</button>
          <h1 style={{
            fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: '300', marginLeft: '8%', marginRight: '8%',
          }}
          >
            {randomMeal.strInstructions}
          </h1>
        </div>
        <div id="body-2" className="child default">
          <h1 id="recently_viewed" className="">Try these recipes</h1>
          {recentlyViewed}
        </div>
        <div id="body-3" className="child default">
          <h1 id="user-hello-text">Signed in as</h1>
          <h1 id="username">{username.current}</h1>
          <img src={imageUrl} alt="" />
          <div id="user-hello" className="child default">
            <h1 style={{ fontFamily: 'Lora, serif' }}>Favorites</h1>
            {(() => {
              if (favoriteRecipes == null) {
                return (<h1 style={{ fontFamily: 'Jost, sans-serif', fontWeight: '300', fontSize: '20px' }}>Search for recipes to add them.</h1>);
              }
              return favoriteRecipes;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
