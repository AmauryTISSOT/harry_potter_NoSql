from bson.objectid import ObjectId
from bson.errors import InvalidId
from app import mongo
from flask import jsonify


def get_character_by_id(character_id):
        character = mongo.characters.find_one({"_id": ObjectId(character_id)})
        if character:
            character["_id"] = str(character["_id"])
            return jsonify(character), 200
        else:
            return jsonify({"error": "Personnage non trouvé"}), 404

def get_nb_student_per_house():
     results = list(mongo.characters.aggregate([
          {"$match" : {'$and' : [
               {"hogwartsStudent": True},
               {"house": {"$ne": ""}}
               ]}},
               {"$group" : {"_id" : "$house", "nb" : {"$sum" : 1 }}}
               ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404
    

def get_nb_characters_per_species():
     results = list(mongo.characters.aggregate([
          {'$group' : {'_id' : '$species', 'nb' : {'$sum' : 1}}},
          { "$sort": { "nb": -1 }}
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404
     
def get_nb_wood_per_wand():
     results = list(mongo.characters.aggregate([
          {"$unwind" : "$wand"},
          {"$match" : {"wand.wood": {"$ne": ""} }},
          {"$group" : {"_id" : "$wand.wood", "nb" : {"$sum" : 1}}},
          { "$sort": { "nb": -1 }}
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404


def get_nb_core_per_wand():
     results = list(mongo.characters.aggregate([
          {"$unwind" : "$wand"},
          {"$match" : {"wand.core": {"$ne": ""} }},
          {"$group" : {"_id" : "$wand.core", "nb" : {"$sum" : 1}}},
          { "$sort": { "nb": -1 }}
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404