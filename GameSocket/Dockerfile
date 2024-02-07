# FROM node:18.18.1-alpine AS build
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 7000
# CMD ["npm", "start"]


# # Imagen base
# FROM node:18.18.1-alpine

# # Directorio de trabajo
# WORKDIR /usr/src/app

# # Copiar archivos de configuración del proyecto
# COPY package*.json ./

# # Instalar todas las dependencias, incluyendo las de desarrollo
# RUN npm install

# # Copiar el resto de los archivos del proyecto
# COPY . .

# # Exponer el puerto que tu aplicación utiliza
# EXPOSE 7000

# # Comando para iniciar la aplicación
# CMD ["npm", "start"]
# Fase de construcción
FROM node:18.18.1-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase de ejecución
FROM node:18.18.1-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package*.json ./
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 7000
CMD ["node", "dist/app.js"]
