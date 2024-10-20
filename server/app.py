from flask import Flask
from flask_cors import CORS

# Import the blueprint routes
from routes.profile import profile_bp
from routes.experience import experience_bp
from routes.projects import projects_bp
from routes.skills import skills_bp

app = Flask(__name__, static_folder='./dist', static_url_path='/')
CORS(app)

# Register blueprints
app.register_blueprint(profile_bp, url_prefix='/api/profile')
app.register_blueprint(experience_bp, url_prefix='/api/experience')
app.register_blueprint(projects_bp, url_prefix='/api/projects')
app.register_blueprint(skills_bp, url_prefix='/api/skills')


@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)
