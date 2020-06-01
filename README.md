# Weather-report

### Weather data

7 days weather data were used to build the report.

20200519T0000	4.510535	1006.9
20200519T0100	4.3105345	1007.4
20200519T0200	5.2705345	1008
20200519T0300	5.3205347	1008.4
....

### Run the app
Everything is containerized from the client, backend to the database. 
So all you need is Docker installed, and then you can run:

```
docker-compose -f docker-compose.yml up -d --build
```

### Initialize Virtual Environment for DEV

```
$ make venv
$ source .venv/bin/activate
$ pip install --upgrade pip
$ pip install --progress-bar off --upgrade pip setuptools
$ pip install --upgrade -r backend/requirements.txt
```