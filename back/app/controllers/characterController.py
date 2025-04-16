from bson.objectid import ObjectId
from bson.errors import InvalidId
from app import mongo
from flask import jsonify, request

def update_character(character_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Aucune donnée à mettre à jour"}), 400

    result = mongo.characters.update_one({"id": character_id}, {"$set": data}) # Son id, pas son object_id 

    if result.matched_count == 0:
        return jsonify({"error": "Personnage non trouvé"}), 404
    
    return jsonify({"message": "Personnage mis à jour"}), 200

def create_character():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Aucune donnée reçue"}), 400

    result = mongo.characters.insert_one(data)
    return jsonify({"message": "Personnage ajouté", "id": str(result.inserted_id)}), 201

def delete_character(character_id):
    result = mongo.characters.delete_one({"id": character_id}) # Son id, pas son object_id 
    if result.deleted_count == 0:
        return jsonify({"error": "Personnage non trouvé"}), 404
    
    return jsonify({"message": "Personnage supprimé"}), 200
