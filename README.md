# 🌱 EcoTrucks Frontend

**EcoTrucks** es una aplicación web diseñada para mejorar la gestión de residuos sólidos urbanos en Cartagena mediante tecnología de geolocalización, mapas interactivos y participación ciudadana. Este repositorio contiene el frontend del proyecto, desarrollado con React y herramientas modernas de desarrollo web.

---

## 🚀 Tecnologías utilizadas

**Versión:** React 19 + Vite 7

### 📦 Librerías principales

- **React** – Librería para construir interfaces dinámicas y modulares.
- **Vite** – Bundler ultrarrápido con soporte nativo para módulos ES.
- **Tailwind CSS** – Framework de estilos utilitario para diseño responsivo.
- **React Router DOM** – Navegación entre vistas con rutas declarativas.
- **React Hook Form** – Manejo eficiente de formularios y validación.
- **Axios** – Cliente HTTP para consumir APIs REST.
- **Socket.IO Client** – Comunicación en tiempo real con el backend.
- **Leaflet + React Leaflet** – Mapas interactivos basados en OpenStreetMap.
- **@turf/turf** – Cálculos geoespaciales (distancias, geocercas, buffers).
- **Zustand** – Manejo de estado global con una API simple y escalable.
- **React Icons** – Iconografía ligera y personalizable.

### 🛠️ Herramientas de desarrollo

- **ESLint + Prettier** – Linter y formateador para mantener código limpio.
- **PostCSS + Autoprefixer** – Procesamiento de estilos y compatibilidad.
- **Vite Plugin React** – Integración optimizada de React en Vite.
- **Type Definitions (`@types/react`)** – Tipado para mejorar la experiencia en desarrollo.

---


---

## 📍 Funcionalidades principales

- Visualización de rutas y zonas de cobertura en tiempo real.
- Reporte de acumulación de basura desde el mapa.
- Seguimiento de ubicación del usuario con geolocalización nativa.
- Simulación de movimiento de camiones recolectores.
- Interfaz adaptada para distintos roles (usuario, conductor).
- Diseño responsivo y accesible.

---
## Conexión futura con backend
- Este frontend está preparado para conectarse con un backend desarrollado en Java 21 usando tecnologías como Spring Web, Spring Data JPA/MongoDB y WebSocket. La lógica de comunicación en tiempo real ya está integrada con socket.io-client, lista para consumir eventos desde el servidor.

## 📄 Licencia
Este proyecto está bajo la licencia Fundacion Universitaria Tecnologico Comfenalco.

## ✉️ Contacto
- Desarrollado por Joseph Armando Vanegas Mejía & compañia 📍 Cartagena, Bolívar – Colombia

---
## 🧪 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ecotrucks-f.git
cd ecotrucks-f

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev


## 📁 Estructura del proyecto

