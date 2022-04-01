import os
import flask
from dotenv import find_dotenv, load_dotenv
from models import db
from routes import bp

load_dotenv(find_dotenv())


def main():
    app = flask.Flask(__name__)

    uri = os.getenv("DATABASE_URL")
    if uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)
    app.config["SQLALCHEMY_DATABASE_URI"] = uri
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    db.init_app(app)

    app.register_blueprint(bp)

    with app.app_context():
        db.create_all()

    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8080)), debug=True
    )


if __name__ == "__main__":
    main()
