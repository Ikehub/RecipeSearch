"""
Module contains all routes functionality
"""
import json
import flask
from models import db, User

# pylint: disable=missing-function-docstring, no-member

routes = flask.Blueprint("routes", __name__)
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

# route for serving React page
@bp.route("/")
def index():
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
