# Kosmos — Sitio Web

Sitio promocional del sintetizador VST3 **Kosmos**. React 19 + Vite + Tailwind CSS v4.

## Requisitos

- Node.js 20+

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `dist/`. Para previsualizarlo localmente:

```bash
npm run preview
```

## Deploy en Netlify

El repo incluye [`netlify.toml`](netlify.toml) con la configuración de build (`npm run build`, publish `dist`). Para desplegar:

1. En Netlify: **Add new site → Import an existing project**.
2. Conectá este repositorio de GitHub.
3. Netlify detecta automáticamente el build command y el publish directory desde `netlify.toml` — no hace falta configurar nada más.
4. Deploy.

No se requieren variables de entorno; el sitio es completamente estático.

## Estructura

```
src/
├── components/       # Navbar, Hero, Features, Installation, Footer
├── i18n/              # Contexto de idioma + traducciones (EN/ES)
├── hooks/             # useReveal (animaciones on-scroll)
├── App.tsx
└── index.css          # Tema y utilidades de Tailwind
```
