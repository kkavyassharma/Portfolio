from flask import Blueprint, jsonify
from config import get_db

skills_bp = Blueprint('skills', __name__)

@skills_bp.route('/', methods=['GET'])
def get_skills():
    db = get_db()
    skills = db.skills.find_one({}, {"_id": 0})
    return jsonify(skills)
