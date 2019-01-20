FROM node:10.14.2-alpine

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --production

COPY ./ ./

EXPOSE 7001
ENTRYPOINT npm run start
