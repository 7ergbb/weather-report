import logging
import os
from logging.handlers import RotatingFileHandler
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://myuser:mypassword@db/weather_rep'
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db = SQLAlchemy(app)

if not app.debug:
    if not os.path.exists('logs'):
        os.mkdir('logs')
    file_handler = RotatingFileHandler('logs/weather.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)
    app.logger.info('Weather report backend startup')

from .model import Weather


@app.route('/weather/<days>')
def get_weather(days):
    selected_weather = []
    try:
        selected_weather = db.session.query(Weather).filter(
            Weather.days.between(text(f'(SELECT max(days) FROM weather) - INTERVAL \'{days} DAY\''),
                                 text('(SELECT max(days) FROM weather)'))).all()
    except Exception as ex:
        app.logger.error(ex)
    return {'data': [Weather.get_dict(item) for item in selected_weather]}
