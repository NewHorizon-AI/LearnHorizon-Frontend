# Etapa base: Se utiliza para instalar dependencias y preparar el entorno
FROM node:20.16-alpine AS base

# Crear el directorio de trabajo
WORKDIR /learn-horizon-frontend-app

# Copiar los archivos de configuración de npm
COPY package*.json ./

# Instalar todas las dependencias (producción + desarrollo)
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Etapa de construcción: Se compila TypeScript a JavaScript
FROM base AS build

# Ejecutar la compilación de TypeScript a JavaScript
RUN npm run build

# Etapa de producción: Se prepara la imagen final para producción
FROM node:20.16-alpine AS production

# Crear el directorio de trabajo
WORKDIR /learn-horizon-frontend-app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=build /learn-horizon-frontend-app/.next ./.next
COPY --from=build /learn-horizon-frontend-app/node_modules ./node_modules
COPY --from=build /learn-horizon-frontend-app/package.json ./package.json

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["npm", "run", "start"]
