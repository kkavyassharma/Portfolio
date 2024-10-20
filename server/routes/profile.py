from flask import Blueprint, jsonify
from config import get_db

profile_bp = Blueprint('profile', __name__)

@profile_bp.route('/', methods=['GET'])
def get_profile():
    db = get_db()
    profile = db.profile.find_one({}, {"_id": 0})
    return jsonify(profile)
