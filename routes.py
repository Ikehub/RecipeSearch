"""
Module contains all routes functionality
"""
import json

import requests
import flask
from models import db, User, Favorites

# pylint: disable=missing-function-docstring, no-member, unused-argument

routes = flask.Blueprint("routes", __name__)
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)
MEAL_DB_ENDPOINT = "https://www.themealdb.com/api/json/v1/1"

# route for serving React page
@bp.route("/", methods=["GET"], defaults={"path": ""})
@bp.route("/<path:path>", methods=["GET"])
def index(path):
    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")


@routes.route("/login", methods=["POST"])
def login():
    data = json.loads(flask.request.data)
    email = data["email"]
    image_url = data["image_url"]
    name = data["name"]

    user = User.query.filter_by(email=email).first()

    if not user:
        new_user = User(email=email, image_url=image_url, name=name)
        db.session.add(new_user)
        db.session.commit()
    return flask.jsonify({"msg": "success"})


@routes.route("/searchMeal", methods=["POST"])
def search():
    data = json.loads(flask.request.data)
    meal_name = data["meal_name"]

    url = f"{MEAL_DB_ENDPOINT}/search.php"
    parameters = {"s": meal_name}

    request = requests.get(url=url, params=parameters)
    response = request.json()

    return flask.jsonify(response["meals"])


@routes.route("/searchIngredients", methods=["POST"])
def search_by_ingredient():
    data = json.loads(flask.request.data)
    ingredient = data["ingredient"]

    url = f"{MEAL_DB_ENDPOINT}/filter.php"
    parameters = {"i": ingredient}

    request = requests.get(url=url, params=parameters)
    response = request.json()

    return flask.jsonify(response["meals"])


@routes.route("/searchById", methods=["POST"])
def search_by_id():
    data = json.loads(flask.request.data)
    meal_id = data["meal_id"]

    url = f"{MEAL_DB_ENDPOINT}/lookup.php"
    parameters = {"i": meal_id}

    request = requests.get(url=url, params=parameters)
    response = request.json()

    return flask.jsonify(response["meals"])


@routes.route("/random", methods=["POST"])
def random():
    url = f"{MEAL_DB_ENDPOINT}/random.php"

    request = requests.get(url=url)
    response = request.json()

    return flask.jsonify(response["meals"])


@routes.route("/add", methods=["POST"])
def add_meals():
    data = json.loads(flask.request.data)
    email = data["email"]
    meal_id = data["idMeal"]
    image = data["strMealThumb"]
    instructions = data["strInstructions"]
    meal_name = data["strMeal"]

    meals = Favorites(
        email=email,
        idMeal=meal_id,
        strMealThumb=image,
        strInstructions=instructions,
        strMeal=meal_name,
    )
    db.session.add(meals)
    db.session.commit()
    return flask.jsonify({"msg": "success"})


@routes.route("/delete", methods=["POST"])
def delete_meals():
    data = json.loads(flask.request.data)
    email = data["email"]
    meal_id = data["idMeal"]

    Favorites.query.filter_by(email=email, idMeal=meal_id).delete()

    db.session.commit()
    return flask.jsonify({"msg": "success"})


@routes.route("/is_favorites", methods=["POST"])
def is_favorites():
    data = json.loads(flask.request.data)
    email = data["email"]
    meal_id = data["idMeal"]
    meal = Favorites.query.filter_by(email=email, idMeal=meal_id).first()
    print(meal)
    if meal:
        return flask.jsonify({"is_favorites": True})

    return flask.jsonify({"is_favorites": False})


@routes.route("/get_all_meals", methods=["POST"])
def get_all_meals():
    data = json.loads(flask.request.data)
    email = data["email"]
    meals = Favorites.query.filter_by(email=email).all()
    return flask.jsonify(meals)
