"""
Module contains database models
"""
# pylint: disable=missing-class-docstring
# pylint: disable=no-member
# pylint: disable=consider-using-f-string, too-few-public-methods
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), nullable=False)
    image_url = db.Column(db.String(2500), nullable=False)
    name = db.Column(db.String(250), nullable=False)

    def __repr__(self) -> str:
        return "<User %r>" % self.username
