/* ============================================================
   LUAR JOYAS — CATÁLOGO DE PRODUCTOS
   ============================================================
   Este es el ÚNICO archivo que necesitas editar para:
   - Cambiar precios
   - Agregar o quitar productos
   - Cambiar las imágenes

   CÓMO AGREGAR UN PRODUCTO:
   Copia un bloque { ... }, (incluida la coma final) y cambia los datos.

   CÓMO PONER LA IMAGEN DE UN PRODUCTO:
   1. Guarda la foto en la carpeta  img/productos/
   2. Escribe el nombre exacto del archivo en "imagen"
      Ejemplo:  imagen: "anillo-solitario.jpg"
   Si la imagen no existe todavía, la web muestra un espacio
   elegante con el monograma — no se daña nada.

   CAMPOS:
   - id:        número único, no lo repitas
   - ref:       referencia interna de la pieza (aparece en la web)
   - nombre:    nombre de la joya
   - categoria: "cadenas" | "anillos" | "candongas" | "topos" | "dijes" | "pulsos"
   - linea:     "alta"  (Alta Joyería, hecha a mano)
                "atelier" (línea de producción — nombre editable abajo en CONFIG)
   - material:  texto libre, ej: "Oro 18k · Esmeralda"
   - precio:    número SIN puntos ni signo $. Ej: 2500000
   - imagen:    nombre del archivo dentro de img/productos/
   - destacado: true = aparece en la página de inicio. Máximo 4.
   ============================================================ */

const CONFIG = {
  // Número de WhatsApp del negocio (con indicativo de país, sin + ni espacios)
  whatsapp: "573022894500",

  // Correo que aparece en la web
  correo: "luarjoyas25@gmail.com",

  // Nombre comercial de la línea hecha en máquina.
  // PENDIENTE: el cliente confirmará el nombre definitivo.
  nombreLineaAtelier: "Colección Atelier",

  // Nombre de la línea hecha a mano
  nombreLineaAlta: "Alta Joyería",
};

const PRODUCTOS = [

  /* ------------------- CADENAS ------------------- */
  { id: 1,  ref: "LJ-CA-01", nombre: "Cadena Ría",        categoria: "cadenas",   linea: "alta",    material: "Oro amarillo 18k",            precio: 3850000, imagen: "cadena-01.jpg", destacado: true  },
  { id: 2,  ref: "LJ-CA-02", nombre: "Cadena Vestigio",   categoria: "cadenas",   linea: "alta",    material: "Oro blanco 18k",              precio: 4200000, imagen: "cadena-02.jpg", destacado: false },
  { id: 3,  ref: "LJ-CA-03", nombre: "Cadena Trenza",     categoria: "cadenas",   linea: "atelier", material: "Oro amarillo 18k",            precio: 1680000, imagen: "cadena-03.jpg", destacado: false },
  { id: 4,  ref: "LJ-CA-04", nombre: "Cadena Eslabón",    categoria: "cadenas",   linea: "atelier", material: "Plata 950 con baño de oro",   precio: 890000,  imagen: "cadena-04.jpg", destacado: false },
  { id: 5,  ref: "LJ-CA-05", nombre: "Cadena Fina Luz",   categoria: "cadenas",   linea: "atelier", material: "Oro amarillo 18k",            precio: 1150000, imagen: "cadena-05.jpg", destacado: false },

  /* ------------------- ANILLOS ------------------- */
  { id: 6,  ref: "LJ-AN-01", nombre: "Anillo Solar",      categoria: "anillos",   linea: "alta",    material: "Oro 18k · Esmeralda colombiana", precio: 7900000, imagen: "anillo-01.jpg", destacado: true  },
  { id: 7,  ref: "LJ-AN-02", nombre: "Anillo Cauce",      categoria: "anillos",   linea: "alta",    material: "Oro blanco 18k · Diamante",   precio: 9500000, imagen: "anillo-02.jpg", destacado: false },
  { id: 8,  ref: "LJ-AN-03", nombre: "Anillo Sello Alto", categoria: "anillos",   linea: "atelier", material: "Oro amarillo 18k",            precio: 2100000, imagen: "anillo-03.jpg", destacado: false },
  { id: 9,  ref: "LJ-AN-04", nombre: "Anillo Media Luna", categoria: "anillos",   linea: "atelier", material: "Oro rosado 18k",              precio: 1750000, imagen: "anillo-04.jpg", destacado: false },
  { id: 10, ref: "LJ-AN-05", nombre: "Anillo Trinidad",   categoria: "anillos",   linea: "atelier", material: "Oro tres tonos 18k",          precio: 2450000, imagen: "anillo-05.jpg", destacado: false },

  /* ------------------ CANDONGAS ------------------ */
  { id: 11, ref: "LJ-CD-01", nombre: "Candongas Aura",    categoria: "candongas", linea: "alta",    material: "Oro 18k · Diamantes",         precio: 5600000, imagen: "candonga-01.jpg", destacado: true  },
  { id: 12, ref: "LJ-CD-02", nombre: "Candongas Río",     categoria: "candongas", linea: "atelier", material: "Oro amarillo 18k",            precio: 1350000, imagen: "candonga-02.jpg", destacado: false },
  { id: 13, ref: "LJ-CD-03", nombre: "Candongas Torzal",  categoria: "candongas", linea: "atelier", material: "Oro amarillo 18k",            precio: 1580000, imagen: "candonga-03.jpg", destacado: false },
  { id: 14, ref: "LJ-CD-04", nombre: "Candongas Delta",   categoria: "candongas", linea: "atelier", material: "Oro blanco 18k",              precio: 1420000, imagen: "candonga-04.jpg", destacado: false },
  { id: 15, ref: "LJ-CD-05", nombre: "Candongas Plenas",  categoria: "candongas", linea: "alta",    material: "Oro 18k · Zafiros",           precio: 4800000, imagen: "candonga-05.jpg", destacado: false },

  /* -------------------- TOPOS -------------------- */
  { id: 16, ref: "LJ-TO-01", nombre: "Topos Estela",      categoria: "topos",     linea: "alta",    material: "Oro blanco 18k · Diamantes",  precio: 3900000, imagen: "topo-01.jpg", destacado: false },
  { id: 17, ref: "LJ-TO-02", nombre: "Topos Grano de Oro",categoria: "topos",     linea: "atelier", material: "Oro amarillo 18k",            precio: 620000,  imagen: "topo-02.jpg", destacado: false },
  { id: 18, ref: "LJ-TO-03", nombre: "Topos Cardinal",    categoria: "topos",     linea: "atelier", material: "Oro rosado 18k",              precio: 780000,  imagen: "topo-03.jpg", destacado: false },
  { id: 19, ref: "LJ-TO-04", nombre: "Topos Halo",        categoria: "topos",     linea: "alta",    material: "Oro 18k · Esmeraldas",        precio: 4300000, imagen: "topo-04.jpg", destacado: false },
  { id: 20, ref: "LJ-TO-05", nombre: "Topos Punto Luz",   categoria: "topos",     linea: "atelier", material: "Oro blanco 18k · Zirconia",   precio: 540000,  imagen: "topo-05.jpg", destacado: false },

  /* -------------------- DIJES -------------------- */
  { id: 21, ref: "LJ-DI-01", nombre: "Dije Luna Creciente", categoria: "dijes",   linea: "alta",    material: "Oro 18k · Madreperla",        precio: 2900000, imagen: "dije-01.jpg", destacado: true  },
  { id: 22, ref: "LJ-DI-02", nombre: "Dije Inicial",      categoria: "dijes",     linea: "atelier", material: "Oro amarillo 18k",            precio: 680000,  imagen: "dije-02.jpg", destacado: false },
  { id: 23, ref: "LJ-DI-03", nombre: "Dije Corazón Pleno",categoria: "dijes",     linea: "atelier", material: "Oro rosado 18k",              precio: 850000,  imagen: "dije-03.jpg", destacado: false },
  { id: 24, ref: "LJ-DI-04", nombre: "Dije Cruz Fina",    categoria: "dijes",     linea: "atelier", material: "Oro amarillo 18k",            precio: 720000,  imagen: "dije-04.jpg", destacado: false },
  { id: 25, ref: "LJ-DI-05", nombre: "Dije Gota Esmeralda", categoria: "dijes",   linea: "alta",    material: "Oro 18k · Esmeralda colombiana", precio: 5200000, imagen: "dije-05.jpg", destacado: false },

  /* -------------------- PULSOS ------------------- */
  { id: 26, ref: "LJ-PU-01", nombre: "Pulso Cordón Real", categoria: "pulsos",    linea: "alta",    material: "Oro amarillo 18k",            precio: 4600000, imagen: "pulso-01.jpg", destacado: false },
  { id: 27, ref: "LJ-PU-02", nombre: "Pulso Riel",        categoria: "pulsos",    linea: "atelier", material: "Oro amarillo 18k",            precio: 1950000, imagen: "pulso-02.jpg", destacado: false },
  { id: 28, ref: "LJ-PU-03", nombre: "Pulso Tejido",      categoria: "pulsos",    linea: "atelier", material: "Oro blanco 18k",              precio: 2200000, imagen: "pulso-03.jpg", destacado: false },
  { id: 29, ref: "LJ-PU-04", nombre: "Pulso Esclava Lisa",categoria: "pulsos",    linea: "atelier", material: "Oro amarillo 18k",            precio: 1680000, imagen: "pulso-04.jpg", destacado: false },
  { id: 30, ref: "LJ-PU-05", nombre: "Pulso Constelar",   categoria: "pulsos",    linea: "alta",    material: "Oro 18k · Diamantes",         precio: 8400000, imagen: "pulso-05.jpg", destacado: false },
];

/* Nombres visibles de cada categoría (orden del menú del catálogo) */
const CATEGORIAS = [
  { clave: "cadenas",   nombre: "Cadenas" },
  { clave: "anillos",   nombre: "Anillos" },
  { clave: "candongas", nombre: "Candongas" },
  { clave: "topos",     nombre: "Topos" },
  { clave: "dijes",     nombre: "Dijes" },
  { clave: "pulsos",    nombre: "Pulsos" },
];
