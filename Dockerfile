FROM node:lts-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install --production

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]