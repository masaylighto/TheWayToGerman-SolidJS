FROM node:20 AS base
WORKDIR /app
EXPOSE 80
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR "/src"
COPY --from=base /src/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
