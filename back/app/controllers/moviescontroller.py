from bson.objectid import ObjectId
from bson.errors import InvalidId
from app import mongo
from flask import jsonify


def get_apparition_total():
    results = list(mongo.dialogs.aggregate([
        {"$group" : {'_id' : "$character", 'apparitions' : {'$sum' : 1} }},
        {"$project" : {"percentage" : {"$divide" : ["$apparitions", 100]}}},
        {"$sort" : {"percentage" : -1}}
    ]))
    if results:
          return jsonify(results), 200
    else:
          return jsonify({'error': "calcul impossible"}), 404