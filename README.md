# Fernando Morán — Personal Portfolio & Engineering Lab

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=flat-square&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Portafolio personal y archivo de proyectos de **Fernando Morán** (Desarrollador Full-Stack y estudiante de Ingeniería en Ciencias de la Computación). Diseñado bajo principios de diseño editorial suizo (Swiss Grid), con shaders WebGL interactivos, animaciones tipográficas y optimización de rendimiento en producción.

---

## Características y Arquitectura Visual

- **Custom-Shaped Cursor Trail Shader (WebGL)**:
  - Basado en investigación de shaders reactivos al cursor con sellos SDF geométricos (`crossSquareCorner`).
  - Textura en punto flotante (`RGBA32F`), rampa de color luminosa tipo mecha de fósforo (naranja cálido y amarillo incandescente) con gradiente de velocidad, ruido Simplex 3D y grano editorial.
- **Evolución Humana en ASCII 2D**:
  - Animación paramétrica procedural enmarcada en cuadrícula suiza con modos `PARADE` (desfile) y `MORPH` (metamorfosis), junto a selector de velocidad (`0.5X`, `1X`, `1.75X`).
- **Carrusel de Proyectos con Física Hermite**:
  - Scroll horizontal infinito y continuo mediante interpolación Hermite, con efecto de aberración cromática RGB (`RGB Split`) al arrastrar y `HoverPill` magnético con `mix-blend-difference`.
- **Side Drawers Multiuso**:
  - Vistas detalladas para proyectos (incluyendo enlaces directos como [VeriTask.cloud](https://veritask.cloud)), biografía con descarga de CV y formulario de contacto.
- **Laboratorio de Certificados (`/lab`)**:
  - Explorador interactivo de certificaciones y credenciales académicas categorizadas (Cloud, Redes, AI, Full-Stack), con visor y panel de detalles integrado.
- **Loader Arquitectónico**:
  - Animación vectorial de construcción y trazado de guías basada en la marca de identidad `N.`, persistida mediante `sessionStorage` para optimizar visitas recurrentes.
- **Identidad & Open Graph**:
  - Kit completo de favicons, `site.webmanifest` y tarjeta de previsualización `og:image` de 1200×630px para compartir en redes.

---

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) (Static Site Generation - SSG)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Gráficos & Shaders**: WebGL2 / GLSL
- **Lenguajes**: TypeScript, JavaScript, HTML5 Canvas 2D
- **Imágenes**: Optimización nativa con `astro:assets` (WebP)

---

## Instalación y Desarrollo Local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Nandofernando28/Portafolio.git
cd Portafolio
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Visita `http://localhost:4321` en tu navegador.

---

## Compilación para Producción

Genera los archivos estáticos listos para desplegar:

```bash
npm run build
```

Previsualiza la compilación localmente:

```bash
npm run preview
```

---

## Estructura del Proyecto

```text
/
├── public/
│   ├── brand/               # Logotipos e isotipos vectoriales (N.)
│   ├── Certificados/        # Documentos PDF y credenciales del /lab
│   ├── cv-fernando-moran.pdf# CV descargable
│   ├── og-preview.png       # Imagen Open Graph para redes sociales
│   └── site.webmanifest     # Configuración PWA / Web App
├── src/
│   ├── assets/              # Imágenes optimizadas por Astro (portrait)
│   ├── layouts/
│   │   └── Layout.astro     # Estructura base, loader y meta-etiquetas
│   ├── pages/
│   │   ├── index.astro      # Página principal (hero, shaders, carrusel)
│   │   ├── lab.astro        # Archivo y laboratorio de certificados
│   │   └── 404.astro        # Página 404 con estética suiza
│   └── styles/
│       └── global.css       # Sistema de rejilla suiza, tipografía y utilidades
└── astro.config.mjs
```

---

## Contacto

- **Fernando Morán**
- **Email**: [nandomorancoronel@gmail.com](mailto:nandomorancoronel@gmail.com)
- **LinkedIn**: [fernando-morán](https://www.linkedin.com/in/fernando-mor%C3%A1n)
- **GitHub**: [@Nandofernando28](https://github.com/Nandofernando28)
