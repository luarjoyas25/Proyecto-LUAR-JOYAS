# Proyecto-LUAR-JOYAS

Sitio web catálogo de LUAR JOYAS (Bogotá, Colombia): empresa dedicada a la comercialización y fabricación de joyas, metales y piedras preciosas. Alta joyería y línea de la casa, con consulta directa por WhatsApp.

Desarrollado por **JarcOnline** · rueda3062@gmail.com

## Cómo editar la web (guía para el cliente)

**Casi todo lo que necesitas cambiar está en un solo archivo: `js/productos.js`**

### Poner un precio (o dejarlo oculto)
1. Abre `js/productos.js` con el Bloc de notas (clic derecho → Abrir con → Bloc de notas)
2. Busca el producto por su nombre
3. Cambia el número de `precio:` (sin puntos ni signo $). Ej: `precio: 250000,`
4. Guarda el archivo

> Si dejas `precio: 0,` el precio **no aparece** en la web y el diseño se ve
> limpio. Lo mismo pasa con `material`, `referencia` y `descripcion`: si los
> dejas vacíos (`""`) no se muestran; cuando escribas un valor, aparecen solos.

### Agregar un producto nuevo
1. En `js/productos.js`, copia un bloque completo `{ ... },` de un producto parecido
2. Pégalo debajo y cambia: `id` (número nuevo, no repetido), `nombre`, `categoria`, `genero` y `imagenes`
3. Guarda la foto en la carpeta `img/productos/` con el mismo nombre que escribiste en `imagenes`

### Poner las fotos de los productos
- Guarda cada foto en `img/productos/` con el nombre exacto que aparece en `imagenes`
- Cada producto admite **varias fotos**: la primera es la principal y las demás
  aparecen como miniaturas en la página del producto.
  Ej: `imagenes: ["anillo-bianca.jpeg", "anillo-bianca-2.jpeg"],`
- Si una foto no existe todavía, la web muestra un espacio elegante — nada se daña

### Poner las fotos de la galería
- Guárdalas en `img/galeria/` con los nombres `galeria-01.jpg`, `galeria-02.jpg`… hasta `galeria-12.jpg`

### Poner el video de la portada
- Guarda el video como `img/portada.mp4`
- En `index.html`, busca el bloque `<video>` y quita los signos de comentario `<!--` y `-->` que lo rodean

### Cambiar las redes sociales, la franja superior o el pie
- En `js/productos.js`, en la sección `CONFIG`: edita `redes` (links de TikTok,
  Facebook, Instagram), los mensajes de `avisos`, el `slogan` o el `lemaPie`.
  El cambio aparece en todas las páginas a la vez.

### Editar la Guía Luar Joyas (preguntas y respuestas)
- En `js/productos.js`, sección `GUIA`: cambia el texto de `pregunta` o `respuesta`,
  o copia un bloque para agregar una nueva. Están agrupadas por secciones.

## Estructura

```
index.html        Portada
catalogo.html     Catálogo con filtros por categoría y por género
producto.html     Ficha de detalle de cada pieza
galeria.html      Galería de fotos
nosotros.html     Historia, misión y visión
faq.html          Guía Luar Joyas (preguntas frecuentes)
css/estilos.css   Estilos (no editar)
js/productos.js   ★ Productos, precios, contacto y textos (el archivo del cliente)
js/main.js        Lógica de la web (no editar)
img/productos/    Fotos de los productos
img/galeria/      Fotos de la galería
img/referencias/  Guías de medidas de cadenas (para uso futuro)
referencia-inicial/  Prototipo inicial de diseño (no forma parte de la web)
```

## Notas técnicas

- HTML/CSS/JS puro, sin dependencias ni pasos de compilación — se publica en cualquier hosting estático
- Cada producto: `id`, `nombre`, `categoria`, `genero` y campos opcionales
  (`precio`, `material`, `referencia`, `descripcion`) que se ocultan solos cuando
  están vacíos. Estructura lista para conectar carrito y pasarela de pago (e-commerce futuro)
- La ficha de producto se identifica por `#` en la URL (`producto.html#17`), así
  funciona en cualquier hosting estático sin configuración de servidor
- Google Analytics: snippet preparado y comentado en `index.html` — activar cuando exista la propiedad GA4
- WhatsApp del negocio y correo centralizados en `CONFIG` dentro de `js/productos.js`
