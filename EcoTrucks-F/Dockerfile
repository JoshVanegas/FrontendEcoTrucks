# Usa la imagen oficial de Node
FROM node:22.14.0

# Crea y entra al directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto de Vite
EXPOSE 5173

# Comando para iniciar Vite
CMD ["npm", "run", "dev"]
