FROM node:20 AS base
WORKDIR /app
EXPOSE 80
WORKDIR /src
ADD  src /src
COPY .env.production .env.production
COPY index.html index.html
COPY LICENSE LICENSE
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts
RUN npm install
RUN npm run build
Entrypoint npm start
