from flask import Blueprint, request, jsonify
from . import mongo
from .controllers.getcontroller import (get_character_by_id, get_nb_student_per_house,get_nb_characters_per_species,get_nb_wood_per_wand,get_nb_core_per_wand,get_nb_characters_in_movies)

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

@main.route('/studentperhouse', methods=['GET'])
def route_get_nb_student_per_house():
    return get_nb_student_per_house()
@main.route('/charactersperspecies', methods=['GET'])
def route_get_nb_characters_per_species():
    return get_nb_characters_per_species()

@main.route('/woodperwand', methods=['GET'])
def route_get_nb_wood_per_wand():
    return get_nb_wood_per_wand()

@main.route('/coreperwand', methods=['GET'])
def route_get_nb_core_per_wand():
    return get_nb_core_per_wand()

@main.route('/actorsornot', methods=['GET'])
def route_get_nb_characters_in_movies():
    return get_nb_characters_in_movies()