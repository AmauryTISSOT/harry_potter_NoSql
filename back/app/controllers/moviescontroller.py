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
    
def get_apparaition_movie_one() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Philosopher's Stone"}}},
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

def get_apparaition_movie_two() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Chamber of Secrets"}}},
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


def get_apparaition_movie_three() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Prisoner of Azkaban"}}},
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
     
def get_apparaition_movie_four() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Gobelt of Fire"}}},
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
     
def get_apparaition_movie_five() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Order of the Phoenix"}}},
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
     

def get_apparaition_movie_six() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Half-Blood Prince"}}},
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
     
def get_apparaition_movie_seven() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Deathly Hallows Part 1"}}},
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
     
def get_apparaition_movie_eight() : 
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"movie" : {"$eq" : "Harry Potter and the Deathly Hallows Part 2"}}},
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
     
def get_hp_in_each_movie() :
     results = list(mongo.dialogs.aggregate([
           {"$match" : {"character" : {"$eq" : "Harry Potter"}}},
    {
        "$facet": {
            "apparitions": [
                {
                    "$group": {
                        "_id": "$movie",
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
            "movie": "$apparitions._id",
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