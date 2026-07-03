# Proyecto-LUAR-JOYAS

Sitio web catálogo de LUAR JOYAS (Bogotá, Colombia): empresa dedicada a la comercialización y fabricación de joyas, metales y piedras preciosas. Alta joyería y línea de la casa, con consulta directa por WhatsApp.

Desarrollado por **JarcOnline** · rueda3062@gmail.com

## Cómo editar la web (guía para el cliente)

**Casi todo lo que necesitas cambiar está en un solo archivo: `js/productos.js`**

### Cambiar un precio
1. Abre `js/productos.js` con el Bloc de notas (clic derecho → Abrir con → Bloc de notas)
2. Busca el producto por su nombre
3. Cambia el número de `precio:` (sin puntos ni signo $)
4. Guarda el archivo

### Agregar un producto nuevo
1. En `js/productos.js`, copia un bloque completo `{ ... },` de un producto parecido
2. Pégalo debajo y cambia: `id` (número nuevo, no repetido), `ref`, `nombre`, `precio` e `imagen`
3. Guarda la foto en la carpeta `img/productos/` con el mismo nombre que escribiste en `imagen`

### Poner las fotos de los productos
- Guarda cada foto en `img/productos/` con el nombre que aparece en el campo `imagen` del producto (ej. `anillo-01.jpg`)
- Si la foto no existe todavía, la web muestra un espacio elegante — nada se daña

### Poner las fotos de la galería
- Guárdalas en `img/galeria/` con los nombres `galeria-01.jpg`, `galeria-02.jpg`… hasta `galeria-12.jpg`

### Poner el video de la portada
- Guarda el video como `img/portada.mp4`
- En `index.html`, busca el bloque `<video>` y quita los signos de comentario `<!--` y `-->` que lo rodean

### Cambiar el nombre de la línea de la casa
- En `js/productos.js`, en la sección `CONFIG`, cambia el texto de `nombreLineaAtelier`

### Editar las respuestas de preguntas frecuentes
- Abre `faq.html` y cambia el texto dentro de cada `<div class="respuesta">`

## Estructura

```
index.html        Portada
catalogo.html     Catálogo con filtros por categoría y línea
galeria.html      Galería de fotos
nosotros.html     Historia, misión y visión
faq.html          Preguntas frecuentes
css/estilos.css   Estilos (no editar)
js/productos.js   ★ Productos, precios y datos de contacto (el archivo del cliente)
js/main.js        Lógica de la web (no editar)
img/productos/    Fotos de los productos
img/galeria/      Fotos de la galería
referencia-inicial/  Prototipo inicial de diseño (no forma parte de la web)
```

## Notas técnicas

- HTML/CSS/JS puro, sin dependencias ni pasos de compilación — se publica en cualquier hosting estático
- Los productos usan `id`, `ref` y precio numérico: estructura lista para conectar carrito y pasarela de pago (fase e-commerce futura)
- Google Analytics: snippet preparado y comentado en `index.html` — activar cuando exista la propiedad GA4
- WhatsApp del negocio y correo centralizados en `CONFIG` dentro de `js/productos.js`
