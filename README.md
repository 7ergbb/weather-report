# Weather-report

### Run the app
Everything is containerized from the client, backend to the database. So all you need is Docker installed, and then you can run :

```
docker-compose up --build
```

### Initialize Virtual Environment for DEV

```
$ make venv
$ source .venv/bin/activate
$ pip install --upgrade pip
$ pip install --progress-bar off --upgrade pip setuptools
$ pip install --upgrade -r backend/requirements.txt
```