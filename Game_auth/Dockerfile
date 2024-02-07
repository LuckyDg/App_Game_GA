# # Utiliza una imagen base de Node.js Alpine por su tamaño reducido
# FROM node:18.18.1-alpine

# # Crea un directorio para la aplicación
# WORKDIR /usr/src/app

# # Solo copia el paquete.json y el paquete-lock.json al principio para aprovechar la caché de Docker
# COPY package*.json ./

# # Instala solo las dependencias de producción
# RUN npm install --only=production

# # Copia los archivos compilados
# COPY . .

# # Expone el puerto que tu aplicación utilizará
# EXPOSE 5000

# # Comando para ejecutar la aplicación
# CMD ["node", "dist/app.js"]
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
EXPOSE 5000
CMD ["node", "dist/app.js"]
