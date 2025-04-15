from flask import Blueprint, request, jsonify
from . import mongo

main = Blueprint('main', __name__)

@main.route("/", methods=["GET"])
def index():
    return "Hello, Harry Potter! Si vous voyez ce message, c'est que l'API fonctionne !"

@main.route('/characters', methods=['GET'])
def get_characters():
    characters = list(mongo.characters.find({}, {"_id": 0}))
    return jsonify(characters)
