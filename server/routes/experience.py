from flask import Blueprint, jsonify
from config import get_db

experience_bp = Blueprint('experience', __name__)

@experience_bp.route('/', methods=['GET'])
def get_experience():
    db = get_db()
    experience = list(db.experience.find({}, {"_id": 0}))
    return jsonify(experience)
