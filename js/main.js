/* ============================================================
   LUAR JOYAS — LÓGICA DE LA WEB
   El cliente NO necesita editar este archivo.
   Los productos y datos de contacto se editan en js/productos.js
   ============================================================ */

/* Marca que JavaScript está activo: las animaciones de aparición
   solo ocultan contenido cuando este archivo cargó correctamente */
document.documentElement.classList.add("js");

/* ---------- utilidades ---------- */

function formatearPrecio(numero) {
  return "$" + numero.toLocaleString("es-CO") + " COP";
}

function enlaceWhatsApp(producto) {
  var texto = producto
    ? "Hola LUAR JOYAS, me interesa la pieza \"" + producto.nombre + "\" (Ref. " + producto.ref + ") que vi en su página web."
    : "Hola LUAR JOYAS, me gustaría recibir más información.";
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto);
}

function nombreLinea(clave) {
  return clave === "alta" ? CONFIG.nombreLineaAlta : CONFIG.nombreLineaAtelier;
}

var ICONO_WSP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.8a12 12 0 0 0 4.6 4.2c1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0 0-.2-.1-.4-.1Z"/></svg>';

/* ---------- tarjeta de producto ---------- */

function tarjetaProducto(p) {
  var articulo = document.createElement("article");
  articulo.className = "producto revela";

  articulo.innerHTML =
    '<a class="producto__enlace" href="producto.html?id=' + p.id + '">' +
      '<div class="producto__marco">' +
        '<img src="img/productos/' + p.imagen + '" alt="' + p.nombre + ' — LUAR JOYAS">' +
      '</div>' +
      '<div class="producto__linea">' + nombreLinea(p.linea) + '</div>' +
      '<h3 class="producto__nombre">' + p.nombre + '</h3>' +
      '<div class="producto__material">' + p.material + ' · <span translate="no">Ref. ' + p.ref + '</span></div>' +
      '<div class="producto__precio">' + formatearPrecio(p.precio) + '</div>' +
    '</a>' +
    '<a class="producto__wsp" href="' + enlaceWhatsApp(p) + '" target="_blank" rel="noopener">' +
      ICONO_WSP + 'Consultar' +
    '</a>';

  // Si la foto aún no existe, muestra el espacio elegante con el monograma
  var img = articulo.querySelector("img");
  img.addEventListener("error", function () {
    img.remove();
    var pendiente = document.createElement("div");
    pendiente.className = "producto__pendiente";
    pendiente.innerHTML = "<b>L</b><span>" + p.categoria + "</span>";
    articulo.querySelector(".producto__marco").prepend(pendiente);
  });

  return articulo;
}

/* ---------- detalle de producto (producto.html?id=X) ---------- */

function iniciarDetalle() {
  var contenedor = document.getElementById("detalle");
  if (!contenedor) return;

  var id = parseInt(new URLSearchParams(location.search).get("id"), 10);
  var producto = PRODUCTOS.find(function (p) { return p.id === id; });

  if (!producto) {
    contenedor.innerHTML =
      '<div class="detalle__vacio">' +
        '<h1 class="titulo">Pieza no encontrada</h1>' +
        '<p>La pieza que buscas no está disponible o el enlace no es válido.</p>' +
        '<a href="catalogo.html" class="enlace-sutil">Volver al catálogo</a>' +
      '</div>';
    return;
  }

  // Actualiza el título y las meta descripciones para que el link
  // compartido por WhatsApp muestre el nombre de la pieza
  document.title = producto.nombre + " — LUAR JOYAS";
  var descTexto = producto.nombre + " · " + producto.material + " · " + formatearPrecio(producto.precio) + " · LUAR JOYAS.";
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", descTexto);
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", producto.nombre + " — LUAR JOYAS");
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", descTexto);

  // Descripción por defecto si el producto no trae la suya
  var descripcion = producto.descripcion ||
    "Pieza elaborada a mano en " + producto.material + ". Cada detalle se pule individualmente para lograr un acabado impecable, digno del oficio de la casa.";
  var disponibilidad = producto.disponibilidad || "Bajo pedido · 3–4 semanas";

  contenedor.innerHTML =
    '<div class="detalle__galeria">' +
      '<div class="detalle__marco">' +
        '<img class="detalle__foto" src="img/productos/' + producto.imagen + '" alt="' + producto.nombre + ' — LUAR JOYAS">' +
      '</div>' +
      '<div class="detalle__thumbs">' +
        '<div class="detalle__thumb"></div>' +
        '<div class="detalle__thumb"></div>' +
        '<div class="detalle__thumb"></div>' +
      '</div>' +
    '</div>' +
    '<div class="detalle__info">' +
      '<div class="detalle__linea">' + nombreLinea(producto.linea) + '</div>' +
      '<h1 class="titulo detalle__nombre">' + producto.nombre + '</h1>' +
      '<div class="detalle__precio">' + formatearPrecio(producto.precio) + '</div>' +
      '<div class="detalle__separador"></div>' +
      '<p class="detalle__descripcion">' + descripcion + '</p>' +
      '<dl class="detalle__specs">' +
        '<div><dt>Material</dt><dd>' + producto.material + '</dd></div>' +
        '<div><dt>Referencia</dt><dd translate="no">' + producto.ref + '</dd></div>' +
        '<div><dt>Disponibilidad</dt><dd>' + disponibilidad + '</dd></div>' +
      '</dl>' +
      '<a class="detalle__cta" href="' + enlaceWhatsApp(producto) + '" target="_blank" rel="noopener">' +
        ICONO_WSP + '<span>Consultar por WhatsApp</span>' +
      '</a>' +
      '<p class="detalle__nota">Envío asegurado · Certificado de autenticidad incluido</p>' +
    '</div>';

  // Manejo de la imagen: si no existe, muestra el mismo espacio elegante
  var foto = contenedor.querySelector(".detalle__foto");
  foto.addEventListener("error", function () {
    foto.remove();
    var pendiente = document.createElement("div");
    pendiente.className = "producto__pendiente";
    pendiente.innerHTML = "<b>L</b><span>Imagen pendiente</span>";
    contenedor.querySelector(".detalle__marco").appendChild(pendiente);
  });

  // Piezas relacionadas: hasta 3 de la misma categoría (excluyendo la actual)
  var relacionados = PRODUCTOS
    .filter(function (p) { return p.categoria === producto.categoria && p.id !== producto.id; })
    .slice(0, 3);
  var rejilla = document.getElementById("rejilla-relacionados");
  if (rejilla && relacionados.length) {
    relacionados.forEach(function (p) { rejilla.appendChild(tarjetaProducto(p)); });
  } else if (rejilla) {
    // si no hay suficientes de la misma categoría, muestra 3 destacadas
    PRODUCTOS.filter(function (p) { return p.destacado && p.id !== producto.id; })
      .slice(0, 3)
      .forEach(function (p) { rejilla.appendChild(tarjetaProducto(p)); });
  }
}

/* ---------- catálogo con filtros ---------- */

function iniciarCatalogo() {
  var rejilla = document.getElementById("rejilla-catalogo");
  if (!rejilla) return;

  var filtroCategoria = "todas";
  var filtroLinea = "todas";

  // Si la URL trae #anillos (o ?categoria=anillos), arranca filtrado
  var inicial = location.hash.replace("#", "") ||
                new URLSearchParams(location.search).get("categoria");
  if (inicial && CATEGORIAS.some(function (c) { return c.clave === inicial; })) {
    filtroCategoria = inicial;
  }

  // botones de categoría
  var contenedorFiltros = document.getElementById("filtros-categoria");
  var opciones = [{ clave: "todas", nombre: "Todas las piezas" }].concat(CATEGORIAS);
  opciones.forEach(function (c) {
    var boton = document.createElement("button");
    boton.textContent = c.nombre;
    boton.dataset.clave = c.clave;
    if (c.clave === filtroCategoria) boton.classList.add("activo");
    boton.addEventListener("click", function () {
      filtroCategoria = c.clave;
      contenedorFiltros.querySelectorAll("button").forEach(function (b) { b.classList.remove("activo"); });
      boton.classList.add("activo");
      // guarda el filtro en la URL para que sobreviva al recargar o compartir
      history.replaceState(null, "", c.clave === "todas" ? location.pathname : "#" + c.clave);
      pintar();
    });
    contenedorFiltros.appendChild(boton);
  });

  // botones de línea
  document.querySelectorAll("#filtros-linea button").forEach(function (boton) {
    boton.addEventListener("click", function () {
      filtroLinea = boton.dataset.linea;
      document.querySelectorAll("#filtros-linea button").forEach(function (b) { b.classList.remove("activo"); });
      boton.classList.add("activo");
      pintar();
    });
  });

  function pintar() {
    rejilla.innerHTML = "";
    var visibles = PRODUCTOS.filter(function (p) {
      return (filtroCategoria === "todas" || p.categoria === filtroCategoria) &&
             (filtroLinea === "todas" || p.linea === filtroLinea);
    });
    if (!visibles.length) {
      rejilla.innerHTML = '<p class="sin-resultados">No hay piezas en esta selección por el momento.</p>';
      return;
    }
    visibles.forEach(function (p) { rejilla.appendChild(tarjetaProducto(p)); });
    observarReveles();
  }

  pintar();
}

/* ---------- destacados en la página de inicio ---------- */

function iniciarDestacados() {
  var rejilla = document.getElementById("rejilla-destacados");
  if (!rejilla) return;
  PRODUCTOS.filter(function (p) { return p.destacado; })
    .slice(0, 4)
    .forEach(function (p) { rejilla.appendChild(tarjetaProducto(p)); });
}

/* ---------- categorías en la página de inicio ---------- */

var ROMANOS = ["I", "II", "III", "IV", "V", "VI"];

function iniciarCategoriasInicio() {
  var rejilla = document.getElementById("rejilla-categorias");
  if (!rejilla) return;
  CATEGORIAS.forEach(function (c, i) {
    var enlace = document.createElement("a");
    enlace.className = "categoria revela";
    enlace.href = "catalogo.html#" + c.clave;
    enlace.innerHTML =
      '<span class="categoria__numero">' + ROMANOS[i] + '</span>' +
      '<span class="categoria__nombre">' + c.nombre + '</span>' +
      '<span class="categoria__flecha"></span>';
    rejilla.appendChild(enlace);
  });
}

/* ---------- preguntas frecuentes (se editan en productos.js) ---------- */

function iniciarFaq() {
  var lista = document.getElementById("lista-faq");
  if (!lista || typeof PREGUNTAS === "undefined") return;
  PREGUNTAS.forEach(function (item) {
    var bloque = document.createElement("details");
    var titulo = document.createElement("summary");
    titulo.textContent = item.pregunta;
    var cuerpo = document.createElement("div");
    cuerpo.className = "respuesta";
    cuerpo.textContent = item.respuesta;
    bloque.appendChild(titulo);
    bloque.appendChild(cuerpo);
    lista.appendChild(bloque);
  });
}

/* ---------- galería (fotos en img/galeria/galeria-01.jpg …) ---------- */

function iniciarGaleria() {
  var rejilla = document.getElementById("rejilla-galeria");
  if (!rejilla) return;
  var proporciones = ["3/4", "1/1", "4/5", "1/1", "3/4", "4/5", "1/1", "3/4", "4/5", "1/1", "3/4", "4/5"];
  for (var i = 1; i <= 12; i++) {
    (function (n) {
      var figura = document.createElement("figure");
      var numero = (n < 10 ? "0" : "") + n;
      var img = document.createElement("img");
      img.src = "img/galeria/galeria-" + numero + ".jpg";
      img.alt = "LUAR JOYAS — galería " + numero;
      img.addEventListener("error", function () {
        img.remove();
        figura.style.aspectRatio = proporciones[n - 1];
        figura.style.position = "relative";
        figura.innerHTML = '<div class="galeria__pendiente"><b>L</b><span>Imagen ' + numero + '</span></div>';
      });
      figura.appendChild(img);
      rejilla.appendChild(figura);
    })(i);
  }
}

/* ---------- animación de aparición al hacer scroll ---------- */

var observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

function observarReveles() {
  document.querySelectorAll(".revela:not(.visible)").forEach(function (el) {
    observador.observe(el);
  });
}

/* ---------- cabecera, menú móvil y enlaces globales ---------- */

function iniciarBase() {
  // franja superior y lema del pie: se escriben una sola vez en
  // CONFIG (js/productos.js) y aparecen en todas las páginas
  var listaAvisos = Array.isArray(CONFIG.avisos) ? CONFIG.avisos.filter(Boolean)
                 : CONFIG.textoAviso ? [CONFIG.textoAviso] : [];
  var duracionCiclo = listaAvisos.length * 4; // 4 segundos por mensaje
  document.querySelectorAll(".aviso").forEach(function (el) {
    if (!listaAvisos.length) return;
    el.innerHTML = "";
    if (listaAvisos.length === 1) {
      el.innerHTML = listaAvisos[0];
      return;
    }
    el.classList.add("aviso--rotativo");
    listaAvisos.forEach(function (texto, i) {
      var span = document.createElement("span");
      span.className = "aviso__msg";
      span.innerHTML = texto;
      span.style.setProperty("--aviso-total", duracionCiclo + "s");
      span.style.setProperty("--aviso-delay", (i * 4) + "s");
      el.appendChild(span);
    });
  });
  document.querySelectorAll(".pie__lema").forEach(function (el) {
    if (CONFIG.lemaPie) el.textContent = CONFIG.lemaPie;
  });
  document.querySelectorAll("[data-slogan]").forEach(function (el) {
    if (CONFIG.slogan) el.textContent = CONFIG.slogan;
  });

  // sombra de la cabecera al hacer scroll
  var cabecera = document.querySelector(".cabecera");
  window.addEventListener("scroll", function () {
    cabecera.classList.toggle("con-sombra", window.scrollY > 10);
  }, { passive: true });

  // menú móvil
  var botonMenu = document.querySelector(".boton-menu");
  var navegacion = document.querySelector(".navegacion");
  if (botonMenu) {
    botonMenu.addEventListener("click", function () {
      navegacion.classList.toggle("abierta");
      document.body.classList.toggle("menu-abierto");
    });
    navegacion.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navegacion.classList.remove("abierta");
        document.body.classList.remove("menu-abierto");
      });
    });
  }

  // marcar la página actual en el menú (funciona con /faq y con faq.html)
  var actual = (location.pathname.split("/").pop() || "index").replace(".html", "");
  document.querySelectorAll(".navegacion a").forEach(function (a) {
    var destino = a.getAttribute("href").replace(".html", "");
    if (destino === actual) a.classList.add("activo");
  });

  // enlaces de WhatsApp generales (botón flotante y pie)
  document.querySelectorAll("[data-wsp-general]").forEach(function (a) {
    a.href = enlaceWhatsApp(null);
  });

  // correo en el pie
  document.querySelectorAll("[data-correo]").forEach(function (a) {
    a.href = "mailto:" + CONFIG.correo;
    a.textContent = CONFIG.correo;
  });

  // nombres de línea dinámicos (por si el cliente cambia el nombre en CONFIG)
  document.querySelectorAll("[data-nombre-atelier]").forEach(function (el) {
    el.textContent = CONFIG.nombreLineaAtelier;
  });

  // botones de redes sociales del pie: los links se editan en CONFIG.redes.
  // Si un link está vacío, el botón se muestra atenuado (sin enlace).
  var ICONOS_REDES = {
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.8c-.9-1-1.4-2.3-1.4-3.8h-3.1v13.5a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.5c-.3 0-.6-.1-.9-.1a6.1 6.1 0 1 0 6.1 6.1V9.9c1.2.9 2.7 1.4 4.3 1.4V8.2c-1.2 0-2.3-.9-3-2.4Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V14h2.7v8h3.2Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.6-.3 1.7-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.6.3 1.7.3 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.6.3-1.7.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.6-.3-1.7-.3-1.2-.1-1.6-.1-4.8-.1Zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.1-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
  };
  var redes = CONFIG.redes || {};
  document.querySelectorAll("[data-redes]").forEach(function (contenedor) {
    contenedor.innerHTML = "";
    ["tiktok", "facebook", "instagram"].forEach(function (red) {
      var link = (redes[red] || "").trim();
      var el;
      if (link) {
        el = document.createElement("a");
        el.href = link;
        el.target = "_blank";
        el.rel = "noopener";
      } else {
        el = document.createElement("span");
        el.title = "Próximamente";
      }
      el.setAttribute("aria-label", red.charAt(0).toUpperCase() + red.slice(1));
      el.innerHTML = ICONOS_REDES[red];
      contenedor.appendChild(el);
    });
    // WhatsApp siempre activo con el número del negocio
    var wsp = document.createElement("a");
    wsp.href = enlaceWhatsApp(null);
    wsp.target = "_blank";
    wsp.rel = "noopener";
    wsp.setAttribute("aria-label", "WhatsApp");
    wsp.innerHTML = ICONO_WSP;
    contenedor.appendChild(wsp);
  });
}

/* ---------- intro de portada (solo en index.html) ---------- */

function iniciarIntro() {
  var intro = document.getElementById("intro");
  if (!intro) return;

  // Si ya se vio en esta sesión o si el usuario prefiere menos movimiento,
  // la intro no se muestra (la clase 'intro-omitir' la oculta desde el <head>).
  var yaVista = false;
  try { yaVista = !!sessionStorage.getItem("luar-intro-vista"); } catch (e) {}
  var prefiereReducir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (yaVista || prefiereReducir) {
    intro.remove();
    document.documentElement.classList.remove("intro-activa");
    document.documentElement.classList.add("intro-terminada");
    return;
  }

  // marca la sesión para no repetirla
  try { sessionStorage.setItem("luar-intro-vista", "1"); } catch (e) {}

  function cerrar() {
    document.documentElement.classList.remove("intro-activa");
    document.documentElement.classList.add("intro-terminada");
    // deja que termine el fade y remueve el nodo (libera memoria)
    setTimeout(function () { if (intro.parentNode) intro.remove(); }, 900);
  }

  // botón de "Saltar" y clic en cualquier lado + tecla Esc
  var botonSaltar = document.getElementById("intro-saltar");
  if (botonSaltar) botonSaltar.addEventListener("click", cerrar);
  intro.addEventListener("click", function (e) {
    if (e.target === botonSaltar) return;
    cerrar();
  });
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { cerrar(); document.removeEventListener("keydown", esc); }
  });

  // cierre automático al terminar la animación CSS (3.3s = 2.4s inicio + .9s salida)
  setTimeout(cerrar, 3300);
}

/* ---------- arranque ---------- */

document.addEventListener("DOMContentLoaded", function () {
  iniciarIntro();
  iniciarBase();
  iniciarCategoriasInicio();
  iniciarDestacados();
  iniciarCatalogo();
  iniciarDetalle();
  iniciarFaq();
  iniciarGaleria();
  observarReveles();
});
