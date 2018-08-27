FROM ubuntu:18.04

LABEL mainteiner="Leonardo B. Castro <leonardo_carvalho@outlook.com>"
LABEL description="React+Redux Starter"

RUN apt-get update && apt-get install vim -y
RUN apt-get install -y software-properties-common python
RUN apt-get install curl -y && curl -sSL https://deb.nodesource.com/setup_8.x | sh
RUN apt-get install -y nodejs && apt-get install -y build-essential
RUN mkdir /var/www && mkdir /var/www/html
RUN apt-get clean && apt-get autoremove
