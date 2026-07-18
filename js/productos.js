/* ============================================================
   LUAR JOYAS — CATÁLOGO DE PRODUCTOS
   ============================================================
   Este es el ÚNICO archivo que necesitas editar para el catálogo:
   productos, precios, fotos, materiales, descripciones y contacto.

   ------------------------------------------------------------
   CÓMO FUNCIONAN LOS CAMPOS "OPCIONALES"
   ------------------------------------------------------------
   precio, material, referencia y descripcion son OPCIONALES.
   - Si los dejas vacíos ("") o el precio en 0, NO aparecen en la
     web y el diseño se ve limpio, como si no existieran.
   - Cuando quieras mostrarlos, solo escribe el valor entre las
     comillas (o el número en el precio) y aparecerán solos.

   Ejemplo — producto sin precio ni descripción todavía:
       precio: 0,  material: "",  descripcion: "",
   Ejemplo — el mismo producto cuando ya tienes los datos:
       precio: 250000,  material: "Plata Ley 925",
       descripcion: "Anillo con esmeralda central y circones.",

   ------------------------------------------------------------
   CÓMO PONER LAS FOTOS
   ------------------------------------------------------------
   1. Guarda la foto en la carpeta  img/productos/
   2. Escribe el nombre exacto del archivo dentro de "imagenes".
   Cada producto admite VARIAS fotos: la primera es la principal
   y las demás aparecen como miniaturas en la página del producto.
       imagenes: ["anillo-bianca.jpeg"],                    (1 foto)
       imagenes: ["anillo-bianca.jpeg", "anillo-bianca-2.jpeg"], (2 fotos)
   Si una foto no existe todavía, la web muestra un espacio
   elegante con el monograma — no se daña nada.

   ------------------------------------------------------------
   CAMPOS DE CADA PRODUCTO
   ------------------------------------------------------------
   - id:          número único, no lo repitas
   - nombre:      nombre de la joya (aparece en la web)
   - categoria:   "cadenas" | "anillos" | "candongas" | "topos" | "dijes" | "pulsos"
   - genero:      "mujer" | "hombre" | "unisex"
   - precio:      número SIN puntos ni signo $ (0 = oculto). Ej: 250000
   - material:    opcional. Ej: "Plata Ley 925"
   - referencia:  opcional. Código interno de la pieza. Ej: "LJ-AN-01"
   - descripcion: opcional. Texto libre sobre la pieza.
   - imagenes:    lista de nombres de archivo dentro de img/productos/
   - destacado:   true = aparece en la página de inicio (máximo 4)
   - metal:       "plata" (valor por defecto si no se escribe) | "oro"
                  Controla el filtro de metal en el catálogo.
                  Los productos actuales NO necesitan este campo: la web
                  los trata como plata automáticamente.
                  Para un producto de oro, agrega:  metal: "oro",
   ============================================================ */

const CONFIG = {
  // Número de WhatsApp del negocio (con indicativo de país, sin + ni espacios)
  whatsapp: "573022894500",

  // Correo que aparece en la web
  correo: "luarjoyas25@gmail.com",

  // Nombre comercial de la línea de manufactura industrial
  // (producción en máquina con los mismos criterios de calidad)
  nombreLineaAtelier: "Joyería",

  // Nombre de la línea hecha a mano
  nombreLineaAlta: "Alta Joyería",

  // Mensajes de la franja negra superior (aparecen en TODAS las páginas).
  // Se van alternando automáticamente cada 4 segundos con un fade suave.
  // - Para editar: cambia el texto entre las comillas
  // - Para agregar uno: copia una línea completa (incluida la coma final)
  // - Para quitarlo: borra la línea entera
  // - Puedes resaltar una palabra en dorado escribiéndola entre <em> y </em>
  avisos: [
    "Envíos a toda Colombia",
    "Consulta personalizada por WhatsApp",
    "Alta joyería hecha a mano",
  ],

  // Slogan de la marca (aparece en la portada bajo el logo y en el pie)
  slogan: "El legado que llevarás contigo",

  // Frase larga que refuerza el slogan (aparece en el pie y en meta descripciones)
  lemaPie: "Joyas que transforman momentos en recuerdos eternos. Fabricación y comercialización, para toda Colombia.",

  // Redes sociales (aparecen como botones en el pie de todas las páginas).
  // PENDIENTE: pegar los links completos entre las comillas cuando el
  // cliente los envíe. Ejemplo: instagram: "https://instagram.com/luarjoyas"
  // Mientras estén vacíos, el botón se muestra pero sin enlace.
  redes: {
    tiktok: "https://www.tiktok.com/@luarjoyas",
    facebook: "https://www.facebook.com/profile.php?id=61591530045826",
    instagram: "https://www.instagram.com/luarjoyas25/",
    // WhatsApp usa automáticamente el número de arriba, no necesita link
  },

  // Guías de medidas que aparecen en la ficha del producto.
  // Las imágenes viven en la carpeta  img/referencias/
  // Se muestra la del género correspondiente; "unisex" muestra ambas.
  // Para agregar una guía a otra categoría, copia un bloque completo:
  //   anillos: { mujer: "tallas-anillos.jpg" },
  guiasMedidas: {
    cadenas: {
      hombre: "medidas-cadena-hombre.avif",
      mujer: "medidas-cadena-mujer.jpg",
    },
  },
};

const PRODUCTOS = [

  /* ------------------- ANILLOS (mujer) ------------------- */
  { id: 1,  nombre: "Anillo Bianca Esmeralda y Circones", categoria: "anillos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["anillo-bianca-esmeralda-circones.jpeg"], destacado: true  },
  { id: 2,  nombre: "Anillo de Compromiso 6mm",           categoria: "anillos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["anillo-compromiso-6mm.jpeg"],           destacado: false },
  { id: 3,  nombre: "Anillo Elisa Esmeralda y Circones",  categoria: "anillos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["anillo-elisa-esmeralda-circones.jpeg"],  destacado: false },
  { id: 4,  nombre: "Anillo Medio Sin Fin",               categoria: "anillos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["anillo-medio-sin-fin.jpeg"],              destacado: false },
  { id: 5,  nombre: "Anillo Mia Esmeralda y Circones",    categoria: "anillos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["anillo-mia-esmeralda-circones.jpeg"],    destacado: false },

  /* ------------------- CADENAS (hombre) ------------------- */
  { id: 6,  nombre: "Cadena Barbara Balines", categoria: "cadenas", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-barbara-balines.jpeg"],    destacado: false },
  { id: 7,  nombre: "Cadena Militar",         categoria: "cadenas", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-militar.jpeg"],            destacado: true  },
  { id: 8,  nombre: "Cadena Mini Cubana",     categoria: "cadenas", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-mini-cubana-hombre.avif"], destacado: false },
  { id: 9,  nombre: "Cadena Rolón",           categoria: "cadenas", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-rolon.jpeg"],              destacado: false },
  { id: 10, nombre: "Rosario",                categoria: "cadenas", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["rosario.png"],                    destacado: false },

  /* ------------------- CADENAS (mujer) ------------------- */
  { id: 11, nombre: "Cadena Cola de Ratón", categoria: "cadenas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-cola-raton.jpeg"],       destacado: false },
  { id: 12, nombre: "Cadena Corazones",     categoria: "cadenas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-corazones.jpeg"],        destacado: false },
  { id: 13, nombre: "Cadena Mini Hermes",   categoria: "cadenas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-mini-hermes.jpeg"],      destacado: false },
  { id: 14, nombre: "Cadena Minicubana",    categoria: "cadenas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-minicubana-mujer.jpeg"], destacado: false },
  { id: 15, nombre: "Cadena Singapur",      categoria: "cadenas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["cadena-singapur.jpeg"],         destacado: false },

  /* ------------------ CANDONGAS (mujer) ------------------ */
  /* NOTA: 3 candongas llegaron sin nombre en el archivo del cliente.
     Se dejaron como "Candonga I / II / III" — reemplázalos por el
     nombre real cuando lo tengas. */
  { id: 16, nombre: "Candonga I",         categoria: "candongas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["candonga-01.avif"],       destacado: false },
  { id: 17, nombre: "Candonga Melcocha",  categoria: "candongas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["candonga-melcocha.avif"],  destacado: true  },
  { id: 18, nombre: "Candonga II",        categoria: "candongas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["candonga-02.avif"],       destacado: false },
  { id: 19, nombre: "Candonga III",       categoria: "candongas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["candonga-03.avif"],       destacado: false },
  { id: 20, nombre: "Candongas Balines",  categoria: "candongas", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["candongas-balines.avif"], destacado: false },

  /* -------------------- DIJES (unisex) -------------------- */
  { id: 21, nombre: "Dije Avión",                categoria: "dijes", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["dije-avion.avif"],                destacado: false },
  { id: 22, nombre: "Dije Corazón",              categoria: "dijes", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["dije-corazon.avif"],              destacado: true  },
  { id: 23, nombre: "Dije Cruz con Circones Blancos", categoria: "dijes", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["dije-cruz-circones-blancos.avif"], destacado: false },
  { id: 24, nombre: "Dije Cruz",                 categoria: "dijes", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["dije-cruz.avif"],                 destacado: false },
  { id: 25, nombre: "Dije Hoja de Árbol",        categoria: "dijes", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["dije-hoja-de-arbol.avif"],        destacado: false },

  /* -------------------- PULSOS (hombre) ------------------- */
  { id: 26, nombre: "Pulsera Bismark",       categoria: "pulsos", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-bismark.avif"],       destacado: false },
  { id: 27, nombre: "Pulsera Cubana Ancha",  categoria: "pulsos", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-cubana-ancha.avif"],  destacado: false },
  { id: 28, nombre: "Pulsera Doble Eslabón", categoria: "pulsos", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-doble-eslabon.avif"], destacado: false },
  { id: 29, nombre: "Pulsera Franco",        categoria: "pulsos", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-franco.avif"],        destacado: false },
  { id: 30, nombre: "Pulsera Gucci",         categoria: "pulsos", genero: "hombre", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-gucci.avif"],         destacado: false },

  /* -------------------- PULSOS (mujer) -------------------- */
  { id: 31, nombre: "Pulsera Amor Eterno",       categoria: "pulsos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-amor-eterno.jpg"],        destacado: false },
  { id: 32, nombre: "Pulsera Cartier",           categoria: "pulsos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-cartier.webp"],          destacado: false },
  { id: 33, nombre: "Pulsera con Dijes Rojos",   categoria: "pulsos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-con-dijes-rojos.avif"],  destacado: false },
  { id: 34, nombre: "Pulsera Corazones",         categoria: "pulsos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-corazones.jpg"],         destacado: false },
  { id: 35, nombre: "Pulsera Bolita Punto 1mm",  categoria: "pulsos", genero: "mujer", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["pulsera-bolita-punto-1mm.webp"], destacado: false },

  /* -------------------- TOPOS (unisex) -------------------- */
  { id: 36, nombre: "Topo Balín Diamantado",     categoria: "topos", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["topo-balin-diamantado.jpg"],     destacado: false },
  { id: 37, nombre: "Topo Rolex",                categoria: "topos", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["topo-rolex.jpg"],                destacado: false },
  { id: 38, nombre: "Topos de Tortuga",          categoria: "topos", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["topos-de-tortuga.avif"],         destacado: false },
  { id: 39, nombre: "Topos Virgen de Guadalupe", categoria: "topos", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["topos-virgen-guadalupe.avif"],   destacado: false },
  { id: 40, nombre: "Topo Corazón con Piedra Circón", categoria: "topos", genero: "unisex", precio: 0, material: "", referencia: "", descripcion: "", imagenes: ["topo-corazon-piedra-circon.avif"], destacado: true },
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

/* ============================================================
   GUÍA LUAR JOYAS (página faq.html)
   Las preguntas están organizadas por secciones.
   - Para editar una respuesta: cambia el texto de "respuesta".
   - Para agregar una pregunta: copia un bloque
     { pregunta: "...", respuesta: "..." }, dentro de la sección.
   - Para agregar una sección nueva: copia un bloque
     { seccion: "...", items: [ ... ] }, completo.
   - Para un salto de línea dentro de una respuesta usa \n
   ============================================================ */
const GUIA = [
  {
    seccion: "Materiales y Calidad",
    items: [
      {
        pregunta: "¿Qué materiales utilizan en Luar Joyas?",
        respuesta: "Cada pieza es elaborada en oro de 18 quilates (18K) o plata ley 925, metales preciosos reconocidos por su belleza, resistencia y valor. Seleccionamos materiales de alta calidad para crear joyas destinadas a perdurar.",
      },
      {
        pregunta: "¿Qué es el oro de 18K?",
        respuesta: "El oro de 18K está compuesto por un 75 % de oro puro y un 25 % de otros metales que aportan mayor resistencia. Es uno de los estándares más valorados en la alta joyería por su equilibrio entre lujo y durabilidad.",
      },
      {
        pregunta: "¿Qué es la plata ley 925?",
        respuesta: "La plata ley 925 contiene un 92,5 % de plata pura, garantizando una joya fina, resistente y con el brillo característico de la plata auténtica.",
      },
      {
        pregunta: "¿Qué es la Alta Joyería?",
        respuesta: "La alta joyería representa la excelencia del arte joyero. Combina metales preciosos, piedras de calidad excepcional y un proceso artesanal donde cada detalle es trabajado con precisión para crear piezas únicas y atemporales.",
      },
    ],
  },
  {
    seccion: "Personalización",
    items: [
      {
        pregunta: "¿Diseñan joyas personalizadas?",
        respuesta: "Cada historia merece una joya única.\nCreamos piezas exclusivas a partir de tus ideas, recuerdos o momentos especiales. Podemos incorporar nombres, iniciales, fechas, piedras preciosas o desarrollar un diseño completamente nuevo junto a ti.",
      },
      {
        pregunta: "¿Fabrican joyas a la medida?",
        respuesta: "Cada pieza puede adaptarse a las necesidades de quien la llevará. Ajustamos medidas y detalles para lograr una joya cómoda, armónica y personalizada.",
      },
      {
        pregunta: "¿Realizan anillos de compromiso y argollas de matrimonio?",
        respuesta: "Diseñamos anillos de compromiso y argollas totalmente personalizadas para representar uno de los momentos más importantes de la vida.",
      },
    ],
  },
  {
    seccion: "Guías",
    items: [
      {
        pregunta: "Guía de tallas para anillos",
        respuesta: "Para conocer tu talla puedes:\n• Medir el diámetro interno de un anillo que utilices habitualmente.\n• Rodear tu dedo con una tira de papel, marcar el punto donde se unen los extremos y medir la longitud obtenida.\nCon esta información podrás consultar nuestra guía de tallas o recibir asesoría personalizada por parte de nuestro equipo.",
      },
      {
        pregunta: "Guía de longitudes para cadenas",
        respuesta: "40 cm – Choker o ajustada al cuello.\n45 cm – Largo clásico.\n50 cm – A la altura de la clavícula.\n55 cm – Sobre el pecho.\n60 cm – Largo elegante.\nTambién fabricamos cadenas en medidas especiales bajo solicitud.",
      },
    ],
  },
  {
    seccion: "Compras y Envíos",
    items: [
      {
        pregunta: "Envíos",
        respuesta: "Realizamos envíos seguros a cualquier ciudad o municipio de Colombia mediante transportadoras aliadas.",
      },
      {
        pregunta: "Tiempo de entrega",
        respuesta: "Las joyas disponibles en inventario se despachan en el menor tiempo posible.\nLas piezas personalizadas o fabricadas bajo pedido requieren un tiempo adicional de producción, el cual será informado al confirmar la compra.",
      },
      {
        pregunta: "Métodos de pago",
        respuesta: "Aceptamos pagos mediante:\n• Bancolombia\n• Davivienda\n• Banco de Bogotá\n• Nequi\n• Daviplata",
      },
    ],
  },
  {
    seccion: "Garantía y Certificados",
    items: [
      {
        pregunta: "Garantía LUAR Joyas",
        respuesta: "Cada joya está respaldada por nuestro compromiso con la calidad.\n• Garantía de por vida sobre la autenticidad y pureza del oro 18K y la plata ley 925.\n• Un (1) año de garantía por defectos de fabricación.\nLa garantía no cubre daños ocasionados por golpes, rayones, caídas, modificaciones realizadas por terceros ni desgaste derivado del uso normal.",
      },
      {
        pregunta: "Certificado de autenticidad",
        respuesta: "Cada joya se entrega con un Certificado de Autenticidad Luar Joyas, donde se garantiza la pureza del metal utilizado.\nCuando la pieza incorpora piedras preciosas, se entrega además el certificado emitido por una institución gemológica autorizada, según corresponda.",
      },
    ],
  },
  {
    seccion: "Cuidado de las Joyas",
    items: [
      {
        pregunta: "¿Cómo conservar el brillo de mi joya?",
        respuesta: "Para preservar su belleza recomendamos:\n• Evitar el contacto con perfumes, cremas, cloro y productos químicos.\n• Guardarla en un lugar seco y protegida cuando no esté en uso.\n• Limpiarla periódicamente con un paño especial para joyería.\n• Retirarla durante actividades que puedan ocasionar golpes o desgaste.",
      },
      {
        pregunta: "Servicio de mantenimiento",
        respuesta: "También ofrecemos servicios de limpieza, pulido, restauración y reparación para ayudar a conservar tus joyas en excelentes condiciones con el paso del tiempo.",
      },
    ],
  },
];
