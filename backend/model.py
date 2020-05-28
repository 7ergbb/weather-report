from .app import db


class Weather(db.Model):
    """Data model for weather info."""
    __tablename__ = 'weather'

    days = db.Column(db.DateTime(), primary_key=True)
    temperature = db.Column(db.Float())
    pressure = db.Column(db.Float())

    def __init__(self, days, temperature, pressure):
        self.days = days
        self.temperature = temperature
        self.pressure = pressure

    @staticmethod
    def get_dict(obj):
        if obj is not None:
            return {'days': str(obj.days), 'temperature': obj.temperature, 'pressure': obj.pressure}
