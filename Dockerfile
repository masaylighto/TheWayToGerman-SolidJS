#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM node:20 AS base
WORKDIR /app
EXPOSE 80
WORKDIR /src
COPY . .
WORKDIR "/src"
RUN npm ci --omit=dev
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p
CMD npm run dev
