---
title: "UNET360 - Navegación Espacial"
description: "Motor de grafos y panel de administración para un mapa interactivo 360 del campus, operando sobre bases de datos NoSQL."
order: 3
date: "2025-08-18"
tags:
  - "Python"
  - "Vue.js"
  - "MongoDB"
  - "Supabase"
subtitle: "Motor de Grafos · Arquitectura NoSQL"
featured: true
repoUrl: "https://github.com/victoria-ballesteros/UNET360"
# liveUrl: "#" # En preparación para lanzamiento en vivo
cardImage: "/images/projects/unet360-card.jpg"
images:
  - "/images/projects/unet360-landing.png"
  - "/images/projects/unet360-viewer.png"
  - "/images/projects/unet360-admin.png"
---

**El Problema**

Encontramos una oportunidad de implementar un sistema de navegación virtual inmersivo para la universidad. El verdadero desafío técnico de este proyecto colaborativo no era renderizar imágenes en 360 grados, sino construir la lógica matemática e infraestructural que permitiera "conectar" esas imágenes espacialmente. Además, se necesitaba un panel de control para que administradores pudieran subir, geolocalizar y enlazar nuevos espacios dinámicamente sin tocar el código.

**La Arquitectura**

Como parte del equipo de desarrollo, asumí la responsabilidad de la arquitectura espacial y la gestión de entidades:

-- Motor de Grafos (Python): Desarrollé la lógica del backend encargada de procesar las imágenes como "nodos" interconectados dentro de un grafo espacial, gestionando las relaciones de adyacencia que permiten al usuario moverse de un punto a otro con fluidez.

-- Almacenamiento NoSQL (MongoDB): Aprovechamos la flexibilidad documental de MongoDB para almacenar los nodos. A diferencia de un modelo relacional estricto, NoSQL nos permitió guardar los metadatos espaciales, puntos de interés (hotspots) y arrays de conexiones adyacentes en un solo documento JSON, optimizando el tiempo de consulta y lectura del grafo.

- Administración Integral (Vue.js): Construí la interfaz de usuario de los paneles de administración y desarrollé parte de los endpoints CRUD necesarios para la ingesta de imágenes, parametrización de coordenadas y vinculación lógica de los nodos.

**El Resultado**

Una base arquitectónica robusta y escalable para la navegación virtual. El motor de datos y los paneles desarrollados sentaron bases tan sólidas que el proyecto se mantiene en desarrollo activo por parte del equipo para su inminente despliegue oficial, demostrando mi capacidad para integrarme en flujos de trabajo colaborativos y construir lógica de software compleja.