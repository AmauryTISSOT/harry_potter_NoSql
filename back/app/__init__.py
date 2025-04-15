from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

mongo = None  # variable globale

def create_app():
    global mongo
    app = Flask(__name__)
    CORS(app) # Autoriser les requêtes CORS

    # Indiquer ci-dessous les paramètres de connexion à votre base de données mongoDB
    mongo = MongoClient('localhost', 27017, username="admin", password="secret").get_database('harry_potter')

    print("MongoDB connected !")

    from .routes import main
    app.register_blueprint(main)

    return app
