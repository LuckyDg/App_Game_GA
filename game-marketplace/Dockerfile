# Fase de construcción
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase de ejecución
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist/game-marketplace /usr/share/nginx/html
EXPOSE 12000
CMD ["nginx", "-g", "daemon off;"]
