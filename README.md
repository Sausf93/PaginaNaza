# Nazaret Santana · Psicóloga Sanitaria y Forense

Sitio web estático (HTML + CSS + JS, sin dependencias) alojado en GitHub Pages.

## 🌐 Ver la web
- **Enlace público (GitHub Pages):** https://sausf93.github.io/PaginaNaza/
- Cuando se compre el dominio propio, se conecta desde *Settings → Pages → Custom domain*.

## ✏️ Qué editar (todo está marcado en el código con `EDITAR`)
Abre `index.html` y busca los comentarios `<!-- EDITAR ... -->`:

| Dato | Dónde |
|------|-------|
| **Enlace de Doctoralia** (botones "Reservar cita") | Busca `doctoralia.es` y reemplaza por el perfil real |
| **WhatsApp** | Busca `34600000000` y pon el número real (formato internacional, sin `+` ni espacios) |
| **Correo** | Busca `correo@ejemplo.com` |
| **Instagram** | Busca `instagram.com/` |
| **Nº colegiada / formación / universidad** | Sección "Sobre mí" y footer |
| **Textos** (sobre mí, servicios) | Directamente en el HTML |

## 🖼️ Fotos
Ahora hay **marcos de ejemplo** ("Foto retrato 4:5", etc.). Para poner fotos reales:
1. Guarda la imagen en la carpeta `assets/` (p. ej. `assets/nazaret.jpg`).
2. En `index.html`, sustituye el bloque `<figure class="portrait">…</figure>` por:
   ```html
   <img src="assets/nazaret.jpg" alt="Nazaret Santana" class="portrait__img">
   ```

## 🎨 Colores
Se cambian en `styles.css`, al principio, en `:root` (variables `--clay`, `--ink`, etc.).

## 🚀 Publicar cambios
```bash
git add .
git commit -m "Actualizar contenido"
git push
```
GitHub Pages actualiza la web en 1-2 minutos.
