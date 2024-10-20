
from pymongo import MongoClient

class Config:
    # MongoDB connection
    MONGO_URI = "mongodb+srv://kkavyassharma:P05tTLxESBWq8y9J@portfoliodb.0gdkt.mongodb.net/?retryWrites=true&w=majority&appName=portfoliodb"
    MONGO_DB_NAME = "portfoliodb"

def get_db():
    client = MongoClient(Config.MONGO_URI)
    db = client[Config.MONGO_DB_NAME]
    return db
