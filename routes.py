"""
Module contains all routes functionality
"""
import json
import requests
import flask
from models import db, User

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


@routes.route("/random", methods=["POST"])
def random():
    url = f"{MEAL_DB_ENDPOINT}/random.php"

    request = requests.get(url=url)
    response = request.json()

    return flask.jsonify(response["meals"])
