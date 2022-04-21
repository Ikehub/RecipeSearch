"""
Module contains database models
"""
# pylint: disable=missing-class-docstring
# pylint: disable=no-member
# pylint: disable=consider-using-f-string, too-few-public-methods
from dataclasses import dataclass
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), nullable=False)
    image_url = db.Column(db.String(2500), nullable=False)
    name = db.Column(db.String(250), nullable=False)

    def __repr__(self) -> str:
        return "<User %r>" % self.username


class RecentlyViewed(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    meal_id = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)

    def __repr__(self) -> str:
        return "<Recently Viewed %r>" % self.meal_id


@dataclass
class Favorites(db.Model):
    id: int
    idMeal: int
    email: str
    strMealThumb: str
    strMeal: str
    strInstructions: str

    id = db.Column(db.Integer, primary_key=True)
    idMeal = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(250), nullable=False)
    strMealThumb = db.Column(db.String(250), nullable=False)
    strMeal = db.Column(db.String(250), nullable=False)
    strInstructions = db.Column(db.String(5000), nullable=False)

    def __repr__(self) -> str:
        return "<Recently Viewed %r>" % self.idMeal
