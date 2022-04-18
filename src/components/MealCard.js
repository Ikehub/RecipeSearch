import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function MealCard(props) {
  const { meal } = props;
  const url = `/meal/${meal.idMeal}`;
  return (
    <div className="card v4 tight">
      <div className="wrapper">
        <div className="image">
          <div className="posterThumb">
            <a className="result" href={url}>
              <img loading="lazy" className="posterThumb" src={`${meal.strMealThumb}/preview`} alt="Recipe Thumbnail" />
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
        </div>
      </div>
    </div>
  );
}
MealCard.propTypes = {
  meal: PropTypes.shape.isRequired,
};

export default MealCard;
