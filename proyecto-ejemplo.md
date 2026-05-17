---
# ════════════════════════════════════════════════════════════════
# PLANTILLA DE PROYECTO — copiar a src/content/projects/nombre.md
# ════════════════════════════════════════════════════════════════

# ─── OBLIGATORIOS ────────────────────────────────────────────────
title: "Nombre del Proyecto"

description: "Una o dos oraciones que aparecen en la tarjeta y en la fila.
  Mantenerlo corto: en tarjeta se corta a 2 líneas."

date: "2025-06-01"        # YYYY-MM-DD · define el orden (más reciente = más arriba)

tags:
  - "Python"
  - "FastAPI"
  - "PostgreSQL"
  - "Docker"
  - "React"
  # Primeros 4 tags se muestran en la tarjeta (el resto en el modal)
  # Primeros 3 tags se muestran en la fila compacta

# ─── OPCIONALES GENERALES ────────────────────────────────────────
subtitle: "API REST · Microservicios"
  # Aparece bajo el título en tarjeta y fila, en color teal
  # Útil para el rol técnico o la categoría del proyecto

featured: false
  # true  → aparece entre los primeros 3 (tarjeta grande, badge "Destacado")
  # false → puede caer en la fila compacta si hay más de 3 proyectos
  # Orden final: featured primero, luego por date descendente

liveUrl: "https://mi-app.vercel.app"
  # Botón naranja "Ver en vivo" en el modal
  # Omitir si no hay demo pública

repoUrl: "https://github.com/usuario/repositorio"
  # Botón "GitHub" en el modal
  # Omitir si el repo es privado

# ─── IMÁGENES ────────────────────────────────────────────────────
#
#  TARJETA (grid de las 3 principales)
#  ┌─────────────────────────────────┐
#  │  cardImage  (miniatura)         │  ← 16:9 recomendado, ~600×340 px
#  │─────────────────────────────────│
#  │  título · subtítulo             │
#  │  descripción (2 líneas)         │
#  │  tags · "Ver detalles →"        │
#  └─────────────────────────────────┘
#
#  FILA COMPACTA (proyectos 4+, "Ver más")
#  ┌──────────────────────────────────────────┐
#  │  título  subtítulo   [tag] [tag]   año → │  ← sin imagen
#  └──────────────────────────────────────────┘
#
#  MODAL (al hacer clic en tarjeta o fila)
#  ┌─────────────────────────────────┐
#  │  carousel / imagen única        │  ← images[] o modalImage
#  │─────────────────────────────────│
#  │  título · fecha                 │
#  │  tags (todos)                   │
#  │  contenido markdown             │
#  │  [GitHub]  [Ver en vivo]        │
#  └─────────────────────────────────┘
#
# JERARQUÍA DE FALLBACK:
#   cardImage  → si ausente usa image → si ausente muestra ícono genérico
#   modalImage → si ausente usa image → si ausente no muestra imagen en modal
#   images[]   → si definido, REEMPLAZA modalImage en el carousel del modal
#                cardImage/image siguen siendo el thumbnail de la tarjeta

cardImage: "/images/projects/mi-proyecto-card.jpg"
  # Miniatura de la tarjeta (solo aplica al formato tarjeta, no a la fila)

modalImage: "/images/projects/mi-proyecto-modal.jpg"
  # Imagen única en el modal — se usa SOLO si no defines images[] abajo

# images: carousel del modal — descomentar si el proyecto tiene varias imágenes
# Si defines esto, modalImage queda ignorado en el modal (cardImage no cambia)
images:
  - "/images/projects/mi-proyecto-01.jpg"   # primera imagen = la que se ve al abrir
  - "/images/projects/mi-proyecto-02.jpg"
  - "/images/projects/mi-proyecto-03.jpg"
  # Con 1 sola imagen: sin flechas ni puntos (igual que modalImage)
  # Con 2+: aparecen flechas ←→ y puntos de navegación

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- CONTENIDO DEL MODAL                                             -->
<!-- Todo lo escrito aquí aparece en el cuerpo scrollable del modal  -->
<!-- Markdown completo: headings, listas, código, negrita, links      -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## ¿Qué es?

Descripción extensa del proyecto. Explicar el problema que resuelve, el contexto,
y por qué las decisiones técnicas tomadas tienen sentido.

## Características principales

- **Feature A** — explicación breve de lo que hace y su impacto
- **Feature B** — integración con servicio externo o decisión arquitectónica relevante
- **Feature C** — dato de escala, usuarios, volumen, etc.

## Stack técnico

`Python` · `FastAPI` · `PostgreSQL` · `Redis` · `Docker` · `React`

## Resultado

Un párrafo con el impacto concreto: métricas, usuarios, tiempo ahorrado, aprendizajes.
