from bson.objectid import ObjectId
from bson.errors import InvalidId
from app import mongo
from flask import jsonify, request

def create_spell():
    data = request.get_json()
    if not data or "id" not in data or "name" not in data:
        return jsonify({"error": "Champs 'id' et 'name' obligatoires"}), 400

    if mongo.spells.find_one({"id": data["id"]}):
        return jsonify({"error": "Un Spell avec cet 'id' existe déjà"}), 400

    mongo.spells.insert_one(data)
    return jsonify({"message": "Spell ajouté"}), 201

def update_spell(spell_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Aucune data à mettre à jour"}), 400

    result = mongo.spells.update_one({"id": spell_id}, {"$set": data})
    if result.matched_count == 0:
        return jsonify({"error": "Spell non trouvé"}), 404
    return jsonify({"message": "Spell mis à jour"}), 200

def delete_spell(spell_id):
    result = mongo.spells.delete_one({"id": spell_id})
    if result.deleted_count == 0:
        return jsonify({"error": "Spell non trouvé"}), 404
    return jsonify({"message": "Spell supprimé"}), 200