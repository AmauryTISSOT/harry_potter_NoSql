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
