FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g --force nodemon

COPY . .

EXPOSE 8080

CMD ["nodemon", "server.js"]