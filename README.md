# Codigo de la entrevista de Craftlabs

**Fecha:** 09/01/2026

Este repositorio tiene el codigo de la **sesion de live coding** que hice en la entrevista con Gabriel La Torre

## Estructura del proyecto

El proyecto esta organizado como una aplicacion full stack con backend y frontend separados

### Backend (`/backend`)
Una API REST en Python hecha con **FastAPI**
- **[main.py](backend/main.py)**: El archivo principal que define las rutas de la API y la configuracion
- **[db.json](backend/db.json)**: Una base de datos ligera basada en JSON usando **TinyDB**
- **[test_main.py](backend/test_main.py)**: Tests para verificar que el backend funciona

### Frontend (`/frontend`)
Una aplicacion frontend hecha con **React** y **Vite**
- **[src/](frontend/src)**: Codigo fuente de los componentes de React y estilos
- **[package.json](frontend/package.json)**: Dependencias del proyecto y scripts

## Como inicializar el proyecto

### Backend
1. Empezar en el directorio `backend`
   ```bash
   cd backend
   ```
2. Instalar las dependencias
   ```bash
   pip install -r requirements.txt
   ```
3. Correr el servidor
   ```bash
   fastapi dev main.py
   ```

### Frontend
1. Empezar en el directorio `frontend`
   ```bash
   cd frontend
   ```
2. Instalar las dependencias
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo
   ```bash
   npm run dev
   ```
