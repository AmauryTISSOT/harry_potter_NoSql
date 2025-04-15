from flask import Blueprint, request, jsonify
from . import mongo
from .controllers.getcontroller import (get_character_by_id)

main = Blueprint('main', __name__)

@main.route("/", methods=["GET"])
def index():
    return "Hello, Harry Potter! Si vous voyez ce message, c'est que l'API fonctionne !"

@main.route('/characters', methods=['GET'])
def get_characters():
    characters = list(mongo.characters.find({}, {"_id": 0}))
    return jsonify(characters)

@main.route('/characters/<character_id>', methods=["GET"])
def route_get_character_by_id(character_id):
    return get_character_by_id(character_id)
