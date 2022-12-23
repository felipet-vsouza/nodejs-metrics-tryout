FROM node:16.16.0-alpine

ADD . .

RUN set -x \
    && apk update \
    && npm i

CMD npm start