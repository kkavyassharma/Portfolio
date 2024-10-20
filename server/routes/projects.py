from flask import Blueprint, jsonify
from config import get_db

projects_bp = Blueprint('projects', __name__)

@projects_bp.route('/', methods=['GET'])
def get_projects():
    db = get_db()
    projects = db.projects.find_one({}, {"_id": 0})
    return jsonify(projects)
