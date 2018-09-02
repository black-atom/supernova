FROM node:8-alpine

COPY .* /server/
COPY yarn.lock /server
COPY package.json /server
WORKDIR /server

RUN apk --update add --no-cache python make g++
RUN if [ "x$NODE_ENV" == "xproduction" ]; then yarn install --production ; else yarn install ; fi

COPY test /server/test
COPY src /server/src

EXPOSE 4000