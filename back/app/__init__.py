from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

mongo = None  # variable globale

def create_app():
    global mongo
    app = Flask(__name__)
    CORS(app) # Autoriser les requêtes CORS

    # Indiquer ci-dessous les paramètres de connexion à votre base de données mongoDB

    mongo_uri = "mongodb+srv://juliette:minuit@clusterdb.yb1ipo0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDB"
    client = MongoClient(mongo_uri)
    mongo = client.get_database("harry_potter")
    
    print("MongoDB Atlas connecté !")


    from .routes import main
    app.register_blueprint(main)

    return app
