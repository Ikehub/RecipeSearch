"""
Module contains all routes functionality
"""
import flask

# pylint: disable=missing-function-docstring

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


@routes.route("/login")
def login():
    return flask.render_template("login.html")


@routes.route("/signup")
def signup():
    return flask.render_template("signup.html")
