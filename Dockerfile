FROM node:8-alpine

COPY .env /server/.env
COPY package.json /server
COPY yarn.lock /server
WORKDIR /server

RUN apk --update add --no-cache python make g++
RUN if [ "x$NODE_ENV" == "xproduction" ]; then yarn install --production ; else yarn install ; fi

COPY src /server/src

EXPOSE 3000