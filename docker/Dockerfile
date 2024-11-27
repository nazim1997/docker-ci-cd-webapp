FROM node:16-alpine

WORKDIR /usr/src/app

COPY app/ .

RUN npm install express mysql2

EXPOSE 3000

CMD ["node", "db-query.js"]