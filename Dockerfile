FROM node:20 AS base
WORKDIR /app
EXPOSE 80
WORKDIR /src
COPY . .
WORKDIR "/src"
RUN npm install
RUN npm run build
CMD npm run start
