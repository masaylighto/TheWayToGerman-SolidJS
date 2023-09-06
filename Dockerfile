FROM node:21 AS base
WORKDIR /app
EXPOSE 3000
WORKDIR /src
COPY . .
WORKDIR "/src"
RUN npm install
RUN npm run build
CMD npm run start
