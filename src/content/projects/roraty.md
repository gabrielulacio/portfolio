---
title: "Plataforma de Donaciones - Rotary Club"
description: "Sistema serverless de donaciones integrado con la API de Google Sheets como panel de gestión."
date: "2026-01-28"
order: 2
tags:
  - "Vue.js"
  - "Python"
  - "Google Sheets API"
subtitle: "Integración API · Backend Serverless"
featured: true
liveUrl: "https://www.unocambiaelmundo.org/"
repoUrl: "https://github.com/gabrielulacio/uno-cambia-el-mundo/"
cardImage: "/images/projects/ucem-card.jpg"
images: 
  - "/images/projects/ucem-landing.png"
  - "/images/projects/ucem-landing2.png"
  - "/images/projects/ucem-projects.png"
  - "/images/projects/ucem-projectview.png"
  - "/images/projects/ucem-form.png"
---

**El Problema**

El Rotary Club San Cristóbal necesitaba una plataforma digital pública para la campaña "Uno Cambia el Mundo", con el objetivo de exhibir proyectos sociales y captar donaciones internacionales. El reto principal no era la captación, sino la administración: la directiva (usuarios con poco conocimientos técnico) requería un sistema para auditar los pagos recibidos, pero las restricciones de un proyecto *pro-bono* hacían inviable el desarrollo y mantenimiento de un panel de administración tradicional conectado a una base de datos SQL.

**La Arquitectura**

Diseñé una solución asíncrona de bajo costo y cero mantenimiento, separando la presentación visual de la lógica de almacenamiento:

-- Frontend Conversional (Vue.js): Construí una *landing page* optimizada para la conversión, guiando al usuario desde la exposición emocional del proyecto social hasta un formulario de donación reactivo que procesa diferentes métodos de pago y comprobantes.

-- Backend Serverless (Python): Implementé endpoints serverless que reciben, validan y formatean la data financiera enviada desde el cliente, protegiendo las credenciales de los servicios de terceros.

-- Base de Datos como CMS (Google Sheets API): En lugar de forzar a la directiva a aprender un nuevo software, integré la API de Google para que el backend inyecte los registros transaccionales directamente en una hoja de cálculo segura. Esto convirtió a Google Sheets en un CMS *headless* en tiempo real, ofreciendo una interfaz familiar y eliminando la barrera de adopción para los usuarios finales.

**El Resultado**

Una plataforma transaccional en producción que logró automatizar el registro de donaciones internacionales. El sistema entregó independencia operativa total a la directiva del club, quienes ahora gestionan la auditoría financiera a través de un entorno tabular que ya dominan, sin requerir soporte técnico adicional.