# Installation des librairies

Pour que l'API fonctionne, il faut installer Flask et PyMongo à l'aide de la commande suivante :

```shell
pip install flask pymongo
```

# Paramètres de connexion à la base de données

Pour vous connecter à votre base de données locale mongoDb, il faut se rendre dans le fichier `/app/__init__.py`, et indiquer les paramètres de connexion à votre base de données :

```python
# Indiquer ci-dessous les paramètres de connexion à votre base de données mongoDB
mongo = MongoClient('localhost', 27017, username="admin", password="secret").get_database('harry_potter')
```

# Commande pour lancer le serveur de développement de l'API Flask

Depuis le dossier `/back`, exécuter la commande ci-dessous :

```shell
python run.py
```
