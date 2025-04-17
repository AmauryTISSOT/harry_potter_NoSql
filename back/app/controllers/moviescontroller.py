from bson.objectid import ObjectId
from bson.errors import InvalidId
from app import mongo
from flask import jsonify


def get_apparition_total():
    results = list(mongo.dialogs.aggregate([
         {
        "$facet": {
            "apparitions": [
                {
                    "$group": {
                        "_id": "$character",
                        "apparitions": {"$sum": 1}
                    }
                }
            ],
            "total": [
                {
                    "$group": {
                        "_id": None,
                        "total": {"$sum": 1}
                    }
                }
            ]
        }
    },
    {"$unwind": "$apparitions"},
    {"$unwind": "$total"},
    {
        "$project": {
            "character": "$apparitions._id",
            "apparitions": "$apparitions.apparitions",
            "percentage": {
                "$multiply": [
                    {"$divide": ["$apparitions.apparitions", "$total.total"]},
                    100
                ]
            }
        }
    },
    {"$sort": {"apparitions": -1}}
    ]))
    if results:
          return jsonify(results), 200
    else:
          return jsonify({'error': "calcul impossible"}), 404