---
title: "Mercaevent - SaaS B2B"
description: "Administración unificada de iniciativas B2B, flujos de tareas Kanban y finanzas mediante una arquitectura con estricto control de acceso."
date: "2026-05-10"
order: 1
tags:
  - "Vue.js"
  - "FastAPI"
  - "PostgreSQL"
  - "Docker"
  - "Pinia"
subtitle: "SaaS Multi-Tenant · Gestión de Eventos"
featured: true
# repoUrl: "https://github.com/gabrielulacio/mercaevent"
liveUrl: "https://mercaevent.com"
cardImage: "/images/projects/mercaevent-card.jpg"
images:
  - "/images/projects/mercaevent-landing.png"
  - "/images/projects/mercaevent-workspaces.png"
  - "/images/projects/mercaevent-dashboard.png"
  - "/images/projects/mercaevent-kanban.png"
  - "/images/projects/mercaevent-arch.png"
---

**El Problema**

Las agencias, empresas e incluso freelancer del area de marketing carecían de una herramienta unificada que les permitiera gestionar simultáneamente los presupuestos financieros y el flujo operativo de tareas de manera organizada y sin exponer datos sensibles. Requerían un sistema donde múltiples clientes (organizaciones) pudieran interactuar en el mismo entorno de software, pero con barreras de información impenetrables entre ellos.

**La Arquitectura**

Diseñé la plataforma desde cero priorizando el aislamiento de datos, la seguridad y el rendimiento asíncrono del lado del cliente:

-- Arquitectura Backend (FastAPI & SQLAlchemy): Implementé un modelo multi-tenant real. Desarrollé un sistema de Control de Acceso Basado en Roles (RBAC) que gestiona relaciones jerárquicas complejas entre Organizaciones, Espacios de Trabajo y Membresías. Esto garantiza que el motor de base de datos PostgreSQL nunca filtre información financiera o tareas operativas entre distintos clientes.

-- Frontend Reactivo (Vue.js & Pinia): Construí un cliente SPA (Single Page Application) capaz de manejar estados complejos en tiempo real. La interfaz procesa asíncronamente las interacciones en tableros Kanban y actualiza los registros de gastos contra los presupuestos base sin recargar el navegador, reduciendo la carga del servidor.

-- Infraestructura y Despliegue: Contenericé el ecosistema completo utilizando Docker, orquestando los servicios del frontend, la API y la base de datos para garantizar un entorno replicable, escalable y listo para producción.

**El Resultado**

Mercaevent superó la fase de desarrollo para convertirse en un producto funcional (fase beta). La plataforma procesa exitosamente la gestión de recursos empresariales, demostrando mi capacidad para construir software transaccional complejo, seguro y con un enfoque claro en las necesidades del modelo de negocio B2B.