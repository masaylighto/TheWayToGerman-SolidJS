FROM node:20 AS base
WORKDIR /app
EXPOSE 80
WORKDIR /src
Copy . . 
RUN npm install
RUN npm run build
Entrypoint npm start
