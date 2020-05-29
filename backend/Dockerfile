FROM python:3-onbuild
COPY . /usr/src/app
ENTRYPOINT [ "flask", "run", "-h", "0.0.0.0", "-p", "5000" ]