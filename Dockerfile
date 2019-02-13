FROM node:lts-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]