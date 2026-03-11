# Portfolio Personal

Sitio web de portfolio desarrollado con **Astro** y **Tailwind CSS** para mostrar mis proyectos, habilidades y experiencia.

## Características

- Landing principal con presentación personal.
- Sección de proyectos basada en contenido (`src/content/projects`).
- Proyectos con modal inline.

## 🧰 Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [astro-icon](https://www.npmjs.com/package/astro-icon)

## 📁 Estructura del proyecto

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   └── projects/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## 🚀 Empezar en local

### 1) Requisitos

- Node.js `>=22.12.0`
- npm

### 2) Instalación

```bash
npm install
```

### 3) Desarrollo

```bash
npm run dev
```

La app quedará disponible en `http://localhost:4321`.

## 📜 Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Genera build de producción
npm run preview  # Previsualiza el build
npm run astro    # Ejecuta comandos de Astro CLI
```

## 📝 Cómo se agregarían más proyectos

1. Se crea un archivo `.md` en `src/content/projects/`.
2. Se define el frontmatter (por ejemplo: `title`, `description`, `tags`, `image`, `slug`).
3. Se agrega las imágenes en `public/images/projects/`.
4. Se verifica si aparece en el apartado correspondiente.

---

Hecho con Astro para un portfolio fácil de mantener.
