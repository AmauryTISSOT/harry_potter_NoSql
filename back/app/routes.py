from flask import Blueprint, request, jsonify

from .controllers.spellController import create_spell, delete_spell, update_spell
from . import mongo
from .controllers.getcontroller import (get_character_by_id, get_nb_student_per_house,get_nb_characters_per_species,get_nb_wood_per_wand,get_nb_core_per_wand,get_nb_characters_in_movies, get_student_staff_or_nohogwarts, get_gender_in_hogwarts, get_gender_per_house, get_ancestry_in_hogwarts,get_ancestry_in_each_house, get_alive_or_dead)
from .controllers.characterController import (update_character, create_character, delete_character)
from .controllers.getcontroller import (get_character_by_id, get_nb_student_per_house,get_nb_characters_per_species,get_nb_wood_per_wand,get_nb_core_per_wand,get_nb_characters_in_movies, get_student_staff_or_nohogwarts, get_gender_in_hogwarts, get_gender_per_house, get_ancestry_in_hogwarts,get_ancestry_in_each_house, get_alive_or_dead, get_nb_of_patronus, get_wand_size, get_avg_wand_size_by_gender, get_avg_wand_size_per_house, get_muggle_vs_wizard, get_death_by_gender)
from .controllers.moviescontroller import (get_apparition_total,get_apparaition_movie_one, get_apparaition_movie_two, get_apparaition_movie_three,get_apparaition_movie_four, get_apparaition_movie_five, get_apparaition_movie_six, get_apparaition_movie_seven, get_apparaition_movie_eight, get_hp_in_each_movie)

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

@main.route('/wandsizeperhouse', methods=['GET'])
def route_get_avg_wand_size_per_house():
    return get_avg_wand_size_per_house()



@main.route('/wizardvsmuggle', methods=['GET'])
def route_get_muggle_vs_wizard():
    return get_muggle_vs_wizard()

@main.route('/deathbygender', methods=['GET'])
def route_get_death_by_gender():
    return get_death_by_gender()

@main.route('/spells', methods=['POST'])
def route_create_spell():
    return create_spell()

@main.route('/spells/<spell_id>', methods=['PUT'])
def route_update_spell(spell_id):
    return update_spell(spell_id)

@main.route('/spells/<spell_id>', methods=['DELETE'])
def route_delete_spell(spell_id):
    return delete_spell(spell_id)

@main.route('/apparitionstotal', methods=['GET'])
def route_get_apparition_total():
    return get_apparition_total()

@main.route('/apparitionsmovieone', methods=['GET'])
def route_get_apparaition_movie_one():
    return get_apparaition_movie_one()

@main.route('/apparitionsmovietwo', methods=['GET'])
def route_get_apparaition_movie_two():
    return get_apparaition_movie_two()

@main.route('/apparitionsmoviethree', methods=['GET'])
def route_get_apparaition_movie_three():
    return get_apparaition_movie_three()



@main.route('/apparitionsmoviefour', methods=['GET'])
def route_get_apparaition_movie_four():
    return get_apparaition_movie_four()

@main.route('/apparitionsmoviefive', methods=['GET'])
def route_get_apparaition_movie_five():
    return get_apparaition_movie_five()

@main.route('/apparitionsmoviesix', methods=['GET'])
def route_get_apparaition_movie_six():
    return get_apparaition_movie_six()

@main.route('/apparitionsmovieseven', methods=['GET'])
def route_get_apparaition_movie_seven():
    return get_apparaition_movie_seven()


@main.route('/apparitionsmovieeight', methods=['GET'])
def route_get_apparaition_movie_eight():
    return get_apparaition_movie_eight()

@main.route('/apparitionhpinmovies', methods=['GET'])
def route_get_hp_in_each_movie():
    return get_hp_in_each_movie()