from flask import Blueprint, request, jsonify
from . import mongo
from .controllers.getcontroller import (get_character_by_id, get_nb_student_per_house,get_nb_characters_per_species,get_nb_wood_per_wand,get_nb_core_per_wand,get_nb_characters_in_movies, get_student_staff_or_nohogwarts, get_gender_in_hogwarts, get_gender_per_house, get_ancestry_in_hogwarts,get_ancestry_in_each_house, get_alive_or_dead)
from .controllers.characterController import (update_character, create_character, delete_character)
from .controllers.getcontroller import (get_character_by_id, get_nb_student_per_house,get_nb_characters_per_species,get_nb_wood_per_wand,get_nb_core_per_wand,get_nb_characters_in_movies, get_student_staff_or_nohogwarts, get_gender_in_hogwarts, get_gender_per_house, get_ancestry_in_hogwarts,get_ancestry_in_each_house, get_alive_or_dead, get_nb_of_patronus, get_wand_size, get_avg_wand_size_by_gender)

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

@main.route('/stafforstudent', methods=['GET'])
def route_get_student_staff_or_nohogwarts():
    return get_student_staff_or_nohogwarts()

@main.route('/genderinhogwards', methods=['GET'])
def route_get_gender_in_hogwarts():
    return get_gender_in_hogwarts()

@main.route('/genderperhouse', methods=['GET'])
def route_get_gender_per_houses():
    return get_gender_per_house()

@main.route('/ancestryinhogwards', methods=['GET'])
def route_get_ancestry_in_hogwarts():
    return get_ancestry_in_hogwarts()

@main.route('/ancestryineachhouse', methods=['GET'])
def route_get_ancestry_in_each_house():
    return get_ancestry_in_each_house()

@main.route('/aliveordead', methods=['GET'])
def route_get_alive_or_dead():
    return get_alive_or_dead()

@main.route('/characters/<character_id>', methods=['PUT'])
def route_update_character(character_id):
    return update_character(character_id)
 
@main.route('/characters', methods=['POST'])
def route_create_character():
    return create_character()
 
@main.route('/characters/<character_id>', methods=['DELETE'])
def route_delete_chracter(character_id):
    return delete_character(character_id)

@main.route('/nbofpatronus', methods=['GET'])
def route_get_nb_of_patronus():
    return get_nb_of_patronus()

@main.route('/wandsize', methods=['GET'])
def route_get_wand_size():
    return get_wand_size()

@main.route('/wandsizepergender', methods=['GET'])
def route_get_avg_wand_size_by_gender():
    return get_avg_wand_size_by_gender()
