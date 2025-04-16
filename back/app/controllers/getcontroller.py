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

def get_nb_characters_in_movies() : 
     results = list(mongo.characters.aggregate([
        {
        "$group" : {
            "_id" : {"in movie ?" : {"$ne" : ["$actor", ""]}},
            "count" : {"$sum" : 1}
        }
    }  
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404
     

def get_student_staff_or_nohogwarts() :
     results = list(mongo.characters.aggregate([
           {
                "$project": {
                     "role": {
                          "$switch": {
                               "branches": [
                                    { "case": { "$eq": ["$hogwartsStudent", True] }, "then": "student" },
                                    { "case": { "$eq": ["$hogwartsStaff", True] }, "then": "staff" }
                                    ],
                                    "default": "none"
                                    }
                               }
                              } 
           },
           {
                "$group": {
                     "_id": "$role",
                     "count": { "$sum": 1 }
                          }
           }
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404
     
def get_gender_in_hogwarts():
     results = list(mongo.characters.aggregate([
          {"$match" : {'$and' : [
               {"hogwartsStudent": True},
               {"house": {"$ne": ""}}
               ]}},
               {"$project": {
                    "gender": {
                         "$switch" : {
                              "branches" : [
                                   {"case" : {"$eq" : ["$gender", "male"]}, "then" : "male"},
                                   {"case" : {"$eq" : ["$gender", "female"]}, "then" : "female"},
                                   ],
                                   "default": "non connu"
                                   }
                                   }
                                   }
                                   },
                                   {"$group" : {"_id" : "$gender", "nb" : {"$sum" : 1 }}}
                                   ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404


def get_gender_per_house() :
     results = list(mongo.characters.aggregate([
          {"$match" : { "$and" : [
               {"hogwartsStudent" : True},
               {"house" : {"$ne" : ""}}
          ]}},
          {"$project" : {
               "house" : 1,
               "gender" : 1
          }},
          {"$group" : {"_id" : {"house" : "$house", "gender" : "$gender"}, "number" : {"$sum" : 1}}}

     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404

def get_ancestry_in_hogwarts() : 
     results = list(mongo.characters.aggregate([
          {"$match" : { "$and" : [
               {"hogwartsStudent" : True},
               {"ancestry" : {"$ne" : ""}}
          ]}},
          {"$group" : {"_id" : "$ancestry", "number" : {"$sum" : 1}}}
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404
     
def get_ancestry_in_each_house() : 
     results = list(mongo.characters.aggregate([
          {"$match" : { "$and" : [
               {"hogwartsStudent" : True},
               {"ancestry" : {"$ne" : ""}}
          ]}},
          {"$project" : {
               "house" : 1,
               "ancestry" : 1
          }},
          {"$group" : {"_id" : {"house" : "$house", "ancestry" : "$ancestry"}, "number" : {"$sum" : 1}}}
     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404


def get_alive_or_dead() : 
     results = list(mongo.characters.aggregate([
          {
               "$project" : {
                    "state" : {
                         "$switch" : {
                              "branches" : [
                                   {"case" : {"$eq" : ["$alive", True]}, "then" : "Alive"},
                                   {"case" : {"$eq" : ["$alive", False]}, "then" : "Dead"}
                              ],
                              "default" : "Unknown"
                         }
                    }
               }
          },
          {
               "$group" : {
                    "_id" : "$state",
                    "count" : {"$sum": 1}
               }
          }

     ]))
     if results:
          return jsonify(results), 200
     else:
          return jsonify({'error': "calcul impossible"}), 404