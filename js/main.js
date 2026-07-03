/* ============================================================
   LUAR JOYAS — LÓGICA DE LA WEB
   El cliente NO necesita editar este archivo.
   Los productos y datos de contacto se editan en js/productos.js
   ============================================================ */

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
    '<div class="producto__marco">' +
      '<img src="img/productos/' + p.imagen + '" alt="' + p.nombre + ' — LUAR JOYAS" loading="lazy">' +
    '</div>' +
    '<div class="producto__linea">' + nombreLinea(p.linea) + '</div>' +
    '<h3 class="producto__nombre">' + p.nombre + '</h3>' +
    '<div class="producto__material">' + p.material + ' · Ref. ' + p.ref + '</div>' +
    '<div class="producto__precio">' + formatearPrecio(p.precio) + '</div>' +
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

/* ---------- catálogo con filtros ---------- */

function iniciarCatalogo() {
  var rejilla = document.getElementById("rejilla-catalogo");
  if (!rejilla) return;

  var filtroCategoria = "todas";
  var filtroLinea = "todas";

  // Si la URL trae ?categoria=anillos, arranca filtrado
  var parametros = new URLSearchParams(location.search);
  var inicial = parametros.get("categoria");
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
    enlace.href = "catalogo.html?categoria=" + c.clave;
    enlace.innerHTML =
      '<span class="categoria__numero">' + ROMANOS[i] + '</span>' +
      '<span class="categoria__nombre">' + c.nombre + '</span>' +
      '<span class="categoria__flecha">→</span>';
    rejilla.appendChild(enlace);
  });
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

  // marcar la página actual en el menú
  var actual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navegacion a").forEach(function (a) {
    if (a.getAttribute("href") === actual) a.classList.add("activo");
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
}

/* ---------- arranque ---------- */

document.addEventListener("DOMContentLoaded", function () {
  iniciarBase();
  iniciarCategoriasInicio();
  iniciarDestacados();
  iniciarCatalogo();
  observarReveles();
});
