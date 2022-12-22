FROM node:14.17.0-alpine

ADD . .

RUN set -x \
    && apk update \
    && npm i --production

EXPOSE 3000

CMD npm start