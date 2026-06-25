/* ============================================================= */
/*  GOJO-SCRIPT.JS — Fusión Semana 10 + Semana 11 + Semana 12   */
/*  Satoru Gojo Portfolio · JavaScript I, II & III               */
/*  Todos los requerimientos integrados                          */
/* ============================================================= */


/* ─────────────────────────────────────────────────────────────
   ★ CONSOLA EDUCATIVA (transversal – corre primero)
   Muestra página actual y sus secciones en consola.
───────────────────────────────────────────────────────────── */
const paginaActual = document.title || "呪術高専 Portfolio";
const seccionesPagina = ["Hero", "Avatar / About", "Habilidades", "Técnicas Malditas", "Contacto"];
console.log(`🎌 Página cargada: "${paginaActual}"`);
console.log("📋 Secciones principales:", seccionesPagina);
console.log("⚡ 呪術高専 - Portfolio de Satoru Gojo inicializado correctamente");


/* ═══════════════════════════════════════════════════════════════
   ██████████████  SEMANA 10 — JAVASCRIPT I  ██████████████
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 1 · MODO OSCURO / CLARO
   Botón en navbar alterna entre tema nocturno (estrellas GIF)
   y tema diurno (modo_día.gif en patrón repeat).
   Preferencia guardada en localStorage.
───────────────────────────────────────────────────────────── */
const DARK_BG_IMAGE  = "url('tumblr_6720afe4b23fff20fb0a55a8733db945_9c5fe706_1280.gif')";
const LIGHT_BG_IMAGE = "url('modo_día.gif')";

const darkModeStyles = `
  body.modo-claro {
    background-color: #f0e6f0;
    background-image: ${LIGHT_BG_IMAGE};
    background-repeat: repeat;
    background-size: auto;
    background-attachment: fixed;
    color: #1a001a;
  }
  body.modo-claro .hero-section {
    background: linear-gradient(135deg, rgba(240,230,240,0.92) 0%, rgba(220,200,220,0.85) 100%);
    border-color: #5a2a5a;
  }
  body.modo-claro .hero-section h1,
  body.modo-claro .about-area h2,
  body.modo-claro .skills-area h2 {
    color: #1a001a;
  }
  body.modo-claro .about-area,
  body.modo-claro .skills-area {
    background-color: rgba(255, 245, 255, 0.88);
    border-color: #5a2a5a;
    color: #1a001a;
  }
  body.modo-claro .skill-tag {
    background: rgba(180, 130, 180, 0.4);
    color: #1a001a;
    border-color: #5a2a5a;
  }
  body.modo-claro .project-card {
    background-color: rgba(255, 245, 255, 0.9) !important;
    color: #1a001a !important;
  }
  body.modo-claro .blog-articles article {
    background: rgba(240, 225, 240, 0.75);
    color: #1a001a;
  }
  body.modo-claro .bg-dark {
    background: linear-gradient(135deg, #d8c0d8, #e8d0e8) !important;
    color: #1a001a;
  }
  body.modo-claro .navbar,
  body.modo-claro .navbar.bg-dark,
  body.modo-claro nav.navbar {
    background-color: #e8d8f0 !important;
    background-image: none !important;
    border-bottom: 2px solid #5a2a5a;
  }
  body.modo-claro .navbar-brand,
  body.modo-claro .navbar-dark .navbar-brand,
  body.modo-claro .nav-link,
  body.modo-claro .navbar-dark .nav-link,
  body.modo-claro .navbar-dark .navbar-nav .nav-link {
    color: #2a0a2a !important;
  }
  body.modo-claro .nav-link:hover,
  body.modo-claro .navbar-dark .navbar-nav .nav-link:hover {
    color: #7a1a7a !important;
  }
  body.modo-claro .navbar-toggler {
    border-color: #5a2a5a !important;
  }
  body.modo-claro .navbar-toggler-icon {
    filter: invert(1) sepia(1) saturate(2) hue-rotate(270deg);
  }
  body.modo-claro .perfil-info,
  body.modo-claro .lista-habilidades-personales,
  body.modo-claro .text-muted {
    color: #2a002a !important;
  }
  body.modo-claro .barra-progreso-fondo {
    border-color: #5a2a5a;
  }
  body.modo-claro .blog-area h2,
  body.modo-claro .projects-area h2,
  body.modo-claro section.projects-area h2,
  body.modo-claro section.blog-area h2 {
    color: #2a0a2a !important;
    background: rgba(255, 255, 255, 0.6);
    display: block;
    width: fit-content;
    margin: 0 auto 20px auto;
    padding: 4px 14px;
    border-radius: 8px;
  }
  body.modo-claro .blog-articles article h3 {
    color: #5a0a5a;
  }
  body.modo-claro .blog-articles article small,
  body.modo-claro .blog-articles article p {
    color: #2a002a !important;
  }
  body.modo-claro footer.bg-dark {
    background: linear-gradient(135deg, #d0c0e0, #e0d0f0) !important;
  }
  body.modo-claro footer p,
  body.modo-claro footer .text-muted {
    color: #2a0a2a !important;
  }
`;

// Inyectar estilos de modo claro en <head>
const styleTag = document.createElement("style");
styleTag.id = "modo-claro-styles";
styleTag.textContent = darkModeStyles;
document.head.appendChild(styleTag);

function aplicarModo(modoClaro) {
  const btn = document.getElementById("darkModeToggle");
  if (modoClaro) {
    document.body.classList.add("modo-claro");
    if (btn) btn.textContent = "🌙 Modo Oscuro";
    localStorage.setItem("modoClaro", "true");
  } else {
    document.body.classList.remove("modo-claro");
    if (btn) btn.textContent = "☀️ Modo Claro";
    localStorage.setItem("modoClaro", "false");
  }
}

// Restaurar preferencia guardada
const preferenciaModoClaro = localStorage.getItem("modoClaro") === "true";
aplicarModo(preferenciaModoClaro);

// Evento del botón existente en el HTML
const btnModo = document.getElementById("darkModeToggle");
if (btnModo) {
  btnModo.addEventListener("click", () => {
    const esModoClaro = document.body.classList.contains("modo-claro");
    aplicarModo(!esModoClaro);
  });
}


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 2 · SALUDO PERSONALIZADO
   prompt al cargar: pregunta nombre del visitante.
   Muestra bienvenida dentro del hero section.
   (Versión fusionada: usa sessionStorage + localStorage)
───────────────────────────────────────────────────────────── */
window.addEventListener("load", () => {
  // Preferir sessionStorage (S10) y también guardar en localStorage (S11)
  const nombreGuardado = sessionStorage.getItem("nombreVisitante") || localStorage.getItem("nombreUsuario");
  let nombre = nombreGuardado;

  if (!nombre) {
    nombre = prompt("⚡ ¡Bienvenido al dominio de Satoru Gojo!\n¿Cuál es tu nombre, hechicero?");
    if (!nombre || nombre.trim() === "") nombre = "Visitante";
    nombre = nombre.trim();
    sessionStorage.setItem("nombreVisitante", nombre);
    localStorage.setItem("nombreUsuario", nombre);
    console.log(`👋 Bienvenido, ${nombre}`);
  } else {
    console.log(`👋 Bienvenido de nuevo, ${nombre}`);
  }

  // Insertar saludo en el hero
  const heroContainer = document.querySelector(".hero-section .container");
  if (heroContainer) {
    const saludoEl = document.createElement("p");
    saludoEl.id = "saludo-visitante";
    saludoEl.style.cssText = `
      background: rgba(255,0,255,0.15);
      border: 1px solid #ff00ff;
      border-radius: 20px;
      padding: 8px 20px;
      display: inline-block;
      margin-top: 10px;
      font-size: 1rem;
      color: #ffcc00;
      text-shadow: 0 0 8px rgba(255,204,0,0.5);
    `;
    saludoEl.innerHTML = `👁️ ¡Saludos, <strong>${nombre}</strong>! Has entrado al dominio infinito.`;
    heroContainer.appendChild(saludoEl);
  }

  console.log(`👤 Visitante identificado: ${nombre}`);
});


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 3 · CONTADOR / RESUMEN DE SERVICIOS (TÉCNICAS)
   Botón debajo de las tarjetas de proyectos.
   Recorre el arreglo con for y muestra un alert.
───────────────────────────────────────────────────────────── */
const tecnicasMalditas = [
  "🌀 Vacío Infinito (Expansión de Dominio)",
  "🔴 Rojo – Técnica Reversa (Repulsión masiva)",
  "🔵 Azul – Técnica Amplificada (Atracción absoluta)",
  "⬛ Técnica del Infinito (Barrera pasiva omnipresente)",
  "💥 Hollow Purple – Fusión Rojo + Azul"
];

const projectsArea = document.querySelector(".projects-area");
if (projectsArea) {
  const btnResumen = document.createElement("button");
  btnResumen.id = "btnResumenServicios";
  btnResumen.className = "btn btn-primary rounded-pill mt-3 mb-2";
  btnResumen.style.cssText = "display:block; margin: 12px auto 0;";
  btnResumen.innerHTML = "📋 Mostrar resumen de técnicas";

  btnResumen.addEventListener("click", () => {
    let listado = "⚡ Arsenal de Técnicas Malditas:\n\n";
    for (let i = 0; i < tecnicasMalditas.length; i++) {
      listado += `  ${i + 1}. ${tecnicasMalditas[i]}\n`;
    }
    listado += `\nTotal: ${tecnicasMalditas.length} técnicas dominadas.`;
    alert(listado);
    console.log("📋 Técnicas:", tecnicasMalditas);
  });

  projectsArea.appendChild(btnResumen);
}


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 4 · MOSTRAR / OCULTAR DETALLES DE EXPERIENCIA
   Genera tarjetas de experiencia con botón "Ver más" toggle.
───────────────────────────────────────────────────────────── */
const experiencias = [
  {
    empresa: "Academia de Hechicería de Tokyo",
    puesto: "Profesor / Hechicero Grado Especial",
    anios: 10,
    descripcion: "Entrenamiento de hechiceros de nueva generación. " +
      "Dominio completo del infinito y técnicas de expansión de dominio. " +
      "Responsable de enfrentamientos contra maldiciones de grado especial."
  },
  {
    empresa: "Organización de Hechicería (Jujutsu)",
    puesto: "Agente de Campo – Grado Especial",
    anios: 8,
    descripcion: "Misiones de exterminio de maldiciones de alto nivel. " +
      "Coordinación con equipos de hechiceros junior. " +
      "Desarrollo de nuevas variantes del infinito en combate real."
  },
  {
    empresa: "Clan Gojo",
    puesto: "Heredero de los Seis Ojos",
    anios: 28,
    descripcion: "Portador de los Seis Ojos, la técnica ocular más poderosa de la historia. " +
      "Perfeccionamiento del Infinito desde la infancia. " +
      "Ruptura del balance de poder en el mundo de la hechicería."
  }
];

const aboutArea = document.querySelector(".about-area");
if (aboutArea) {
  const expSection = document.createElement("section");
  expSection.id = "experiencia";
  expSection.style.cssText = `
    background-color: rgba(30,16,30,0.85);
    border: 2px solid #ffffff;
    border-radius: 16px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    grid-column: 1 / -1;
  `;

  let expHTML = `<h2 style="text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #fff;
    padding-bottom:10px;margin-bottom:20px;">
    <i class="fas fa-briefcase"></i> Experiencia de Combate
  </h2>`;

  experiencias.forEach((exp, idx) => {
    expHTML += `
      <div style="border:1px solid #5a2a5a;border-radius:12px;padding:1rem;margin-bottom:1rem;
        background:rgba(90,42,90,0.2);">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <strong style="color:#ffcc00;">${exp.empresa}</strong><br>
            <span style="color:#b5a4b5;">${exp.puesto}</span>
            <span style="margin-left:12px;background:#5a2a5a;padding:2px 10px;
              border-radius:20px;font-size:0.8rem;">${exp.anios} años</span>
          </div>
          <button
            class="btn-ver-mas btn-contacto"
            data-idx="${idx}"
            style="padding:6px 16px;font-size:0.85rem;">
            👁️ Ver más
          </button>
        </div>
        <div id="detalle-exp-${idx}" style="display:none;margin-top:12px;
          border-top:1px dashed #5a2a5a;padding-top:10px;color:#d0c0d0;">
          ${exp.descripcion}
        </div>
      </div>`;
  });

  // Botón REQ 5 dentro de esta misma sección
  expHTML += `
    <button id="btnCalcularExp" class="btn btn-primary rounded-pill mt-2">
      🧮 Calcular años totales de experiencia
    </button>`;

  expSection.innerHTML = expHTML;

  const mainGrid = document.querySelector(".main-grid");
  if (mainGrid) {
    mainGrid.appendChild(expSection);
  }

  // Eventos Ver más / Ver menos
  document.querySelectorAll(".btn-ver-mas").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.idx;
      const detalle = document.getElementById(`detalle-exp-${idx}`);
      if (detalle) {
        const visible = detalle.style.display !== "none";
        detalle.style.display = visible ? "none" : "block";
        btn.textContent = visible ? "👁️ Ver más" : "🙈 Ver menos";
      }
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 5 · CALCULAR AÑOS DE EXPERIENCIA
   Botón suma los años del arreglo y muestra con alert.
───────────────────────────────────────────────────────────── */
document.addEventListener("click", e => {
  if (e.target && e.target.id === "btnCalcularExp") {
    let totalAnios = 0;
    for (let i = 0; i < experiencias.length; i++) {
      totalAnios += experiencias[i].anios;
    }
    alert(`⚡ Años totales de experiencia de Satoru Gojo:\n\n` +
      experiencias.map(ex => `  • ${ex.empresa}: ${ex.anios} años`).join("\n") +
      `\n\n🏆 Total acumulado: ${totalAnios} años`);
    console.log(`Años totales de experiencia: ${totalAnios}`);
  }
});


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 6 · VALIDACIÓN DE FORMULARIO (contact.html)
   - Campos vacíos
   - Email con "@" y "."
   - Mensajes de error inline
   - Alert de éxito y reset
───────────────────────────────────────────────────────────── */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  function crearMsgError(inputEl) {
    let msg = inputEl.parentElement.querySelector(".msg-error-js");
    if (!msg) {
      msg = document.createElement("small");
      msg.className = "msg-error-js";
      msg.style.cssText = "color:#ff4466;display:none;margin-top:4px;font-size:0.8rem;";
      inputEl.parentElement.appendChild(msg);
    }
    return msg;
  }

  function mostrarError(inputEl, texto) {
    const msg = crearMsgError(inputEl);
    msg.textContent = "⚠️ " + texto;
    msg.style.display = "block";
    inputEl.style.borderColor = "#ff4466";
    inputEl.style.boxShadow = "0 0 8px rgba(255,68,102,0.5)";
  }

  function limpiarError(inputEl) {
    const msg = inputEl.parentElement.querySelector(".msg-error-js");
    if (msg) msg.style.display = "none";
    inputEl.style.borderColor = "";
    inputEl.style.boxShadow = "";
  }

  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    let valido = true;

    const campos = contactForm.querySelectorAll("input, textarea");
    campos.forEach(campo => limpiarError(campo));

    campos.forEach(campo => {
      if (campo.value.trim() === "") {
        mostrarError(campo, "Este campo es obligatorio.");
        valido = false;
      }
    });

    const emailEl = contactForm.querySelector('input[type="email"], input[name="email"], #email');
    if (emailEl && emailEl.value.trim() !== "") {
      const emailVal = emailEl.value.trim();
      if (!emailVal.includes("@") || !emailVal.includes(".")) {
        mostrarError(emailEl, "El email debe contener '@' y '.'");
        valido = false;
      }
    }

    if (valido) {
      // REQ 7 – mostrar objeto en consola
      const datos = {};
      campos.forEach(c => { if (c.name) datos[c.name] = c.value.trim(); });
      console.log("📬 Datos del formulario enviado:", datos);

      alert("✅ ¡Mensaje enviado correctamente!\nGojo te responderá... cuando salga del dominio.");
      contactForm.reset();

      const contador = document.getElementById("charCounter");
      if (contador) contador.textContent = "0 / 200 caracteres";
    }
  });
}


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 7 · MOSTRAR DATOS EN CONSOLA AL ENVIAR
   (implementado dentro del submit handler del REQ 6 arriba)
───────────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 8 · CONTADOR DE CARACTERES EN TEXTAREA
   Muestra cuántos caracteres lleva el usuario (máx 200).
───────────────────────────────────────────────────────────── */
const textarea = document.querySelector("textarea, #mensaje, [name='mensaje']");
if (textarea) {
  textarea.setAttribute("maxlength", "200");

  const contador = document.createElement("small");
  contador.id = "charCounter";
  contador.style.cssText = "display:block;margin-top:4px;color:#b5a4b5;font-size:0.8rem;";
  contador.textContent = "0 / 200 caracteres";
  textarea.parentElement.appendChild(contador);

  textarea.addEventListener("input", () => {
    const len = textarea.value.length;
    contador.textContent = `${len} / 200 caracteres`;
    contador.style.color = len >= 180 ? "#ff4466" : len >= 140 ? "#ffcc00" : "#b5a4b5";
  });
}


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 9 · NAVEGACIÓN ACTIVA
   Resalta el nav-link que corresponde a la página actual.
───────────────────────────────────────────────────────────── */
(function marcarNavActiva() {
  const paginaPath = window.location.pathname.split("/").pop() || "index_gojo.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const mapaLinks = {
    "index_gojo.html": ["inicio", "#hero", "index"],
    "index.html":      ["inicio", "#hero", "index"],
    "about.html":      ["sobre", "about"],
    "contact.html":    ["contacto", "contact"]
  };

  const palabrasClave = mapaLinks[paginaPath] || [paginaPath.replace(".html", "")];

  navLinks.forEach(link => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    const texto = link.textContent.toLowerCase();
    const coincide = palabrasClave.some(k => href.includes(k) || texto.includes(k));
    if (coincide) link.classList.add("active");
  });

  if (paginaPath === "" || paginaPath === "index_gojo.html" || paginaPath === "index.html") {
    navLinks.forEach(link => {
      const href = (link.getAttribute("href") || "");
      if (href === "#hero" || href.includes("index")) link.classList.add("active");
    });
  }
})();


/* ─────────────────────────────────────────────────────────────
   S10 · REQ 10 / Smooth scroll (backup)
───────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

console.log("✅ Semana 10: R1–R10 cargados.");


/* ═══════════════════════════════════════════════════════════════
   ██████████████  SEMANA 11 — JAVASCRIPT II  ██████████████
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 1 · MENÚ HAMBURGUESA RESPONSIVE
   Eventos + DOM + classList.toggle
───────────────────────────────────────────────────────────── */
const toggleMenu = () => {
  const navMenu = document.querySelector('.navbar-collapse');
  if (navMenu) navMenu.classList.toggle('show');
};

document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', () => {
      toggleMenu();
      console.log('🍔 Menú hamburguesa toggled');
    });
  }

  // Cerrar menú al hacer click en un enlace (móvil)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.querySelector('.navbar-collapse');
      if (navMenu && window.innerWidth < 769) navMenu.classList.remove('show');
    });
  });

  console.log('✅ S11 Req 1: Menú hamburguesa listo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 2 · EVALUACIÓN DE CALIFICACIONES
   if/else anidados + switch
───────────────────────────────────────────────────────────── */
const evaluarNota = () => {
  const notaInput = prompt('👁️ Ingresa tu nota (0-20):');
  const nota = parseFloat(notaInput);

  if (isNaN(nota) || nota < 0 || nota > 20) {
    alert('⚠️ Nota inválida. Ingresa un número entre 0 y 20.');
    return;
  }

  let calificacion;
  if (nota >= 18)      calificacion = '🏆 Excelente';
  else if (nota >= 15) calificacion = '⭐ Muy bueno';
  else if (nota >= 12) calificacion = '✅ Bueno';
  else if (nota >= 10) calificacion = '🔵 Suficiente';
  else                 calificacion = '❌ Insuficiente';

  const tramo = Math.floor(nota >= 18 ? 5 : nota >= 15 ? 4 : nota >= 12 ? 3 : nota >= 10 ? 2 : 1);
  let mensajeSwitch;
  switch (tramo) {
    case 5: mensajeSwitch = '¡Dominio del Infinito alcanzado!'; break;
    case 4: mensajeSwitch = '¡Técnica Maldita dominada!'; break;
    case 3: mensajeSwitch = 'Vas bien, sigue entrenando.'; break;
    case 2: mensajeSwitch = 'Nivel básico. Puedes más.'; break;
    default: mensajeSwitch = 'Necesitas más práctica, hechicero.';
  }

  const contenedor = document.getElementById('resultado-calificacion');
  if (contenedor) {
    contenedor.innerHTML = `
      <div class="alert alert-info mt-3">
        <strong>Nota: ${nota}/20</strong><br>
        ${calificacion}<br>
        <em>${mensajeSwitch}</em>
      </div>`;
    contenedor.style.display = 'block';
  }

  console.log(`📊 Nota: ${nota} → ${calificacion} | ${mensajeSwitch}`);
};

document.addEventListener('DOMContentLoaded', () => {
  const secCalif = document.getElementById('calificaciones');
  if (secCalif) {
    const btn = secCalif.querySelector('#btn-evaluar');
    if (btn) btn.addEventListener('click', evaluarNota);
  }
  console.log('✅ S11 Req 2: Evaluador de calificaciones listo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 3 · CONTADOR DE SECCIONES
   Bucle for + DOM
───────────────────────────────────────────────────────────── */
const contarSecciones = () => {
  const secciones = document.querySelectorAll('section');
  let resumen = '';

  for (let i = 0; i < secciones.length; i++) {
    const nombre = secciones[i].id ||
      secciones[i].querySelector('h2')?.textContent?.trim() ||
      `Sección ${i + 1}`;
    console.log(`📌 Sección ${i + 1}: ${nombre}`);
    resumen += `Sección ${i + 1}: ${nombre}\n`;
  }

  alert(`🔢 Total de secciones encontradas: ${secciones.length}\n\n${resumen}`);
  return secciones.length;
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => { contarSecciones(); }, 1500);
  console.log('✅ S11 Req 3: Contador de secciones listo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 4 · CARRUSEL DE TESTIMONIOS
   Bucle while + Funciones flecha
───────────────────────────────────────────────────────────── */
const testimonios = [
  { nombre: '🧿 Yuta Okkotsu',    comentario: 'Gojo-sensei me enseñó que el poder real viene de proteger a quienes amas. Su técnica es imposible de superar.' },
  { nombre: '💪 Yuji Itadori',    comentario: 'Sensei siempre parece estar de vacaciones, pero cuando actúa... ni los malditos de grado especial duran.' },
  { nombre: '🧠 Megumi Fushiguro', comentario: 'No lo diré en voz alta, pero es el hechicero más fuerte de la historia. Eso es innegable.' }
];

let indiceActual = 0;

const mostrarTestimonio = () => {
  const contenedor = document.getElementById('testimonio-contenido');
  const indicador  = document.getElementById('testimonio-indicador');
  if (!contenedor) return;

  const t = testimonios[indiceActual];
  contenedor.innerHTML = `
    <blockquote class="blockquote text-center p-3">
      <p class="mb-2">💬 "${t.comentario}"</p>
      <footer class="blockquote-footer">${t.nombre}</footer>
    </blockquote>`;

  if (indicador) indicador.textContent = `Testimonio ${indiceActual + 1}/${testimonios.length}`;
};

const siguiente = () => {
  let i = 0;
  while (i < 1) { indiceActual = (indiceActual + 1) % testimonios.length; i++; }
  mostrarTestimonio();
};

const anterior = () => {
  let i = 0;
  while (i < 1) { indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length; i++; }
  mostrarTestimonio();
};

document.addEventListener('DOMContentLoaded', () => {
  mostrarTestimonio();
  const btnSig = document.getElementById('btn-siguiente');
  const btnAnt = document.getElementById('btn-anterior');
  if (btnSig) btnSig.addEventListener('click', siguiente);
  if (btnAnt) btnAnt.addEventListener('click', anterior);
  console.log('✅ S11 Req 4: Carrusel de testimonios listo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 5 · CALCULADORA DE PROPINAS
   Función flecha + return
───────────────────────────────────────────────────────────── */
const calcularPropina = (monto, porcentaje) => {
  const propina = monto * (porcentaje / 100);
  const total = monto + propina;
  return { propina: propina.toFixed(2), total: total.toFixed(2) };
};

const procesarPropina = (porcentaje) => {
  const input     = document.getElementById('monto-consumo');
  const resultado = document.getElementById('resultado-propina');
  if (!input || !resultado) return;

  const monto = parseFloat(input.value);
  if (isNaN(monto) || monto <= 0) {
    resultado.innerHTML = '<span class="text-danger">⚠️ Ingresa un monto válido y positivo.</span>';
    return;
  }

  const { propina, total } = calcularPropina(monto, porcentaje);
  resultado.innerHTML = `
    <div class="alert alert-success mt-2">
      💰 Propina (${porcentaje}%): S/ ${propina} | Total: S/ ${total}
    </div>`;

  console.log(`💸 Monto: S/${monto} | Propina ${porcentaje}%: S/${propina} | Total: S/${total}`);
};

document.addEventListener('DOMContentLoaded', () => {
  [10, 15, 20].forEach(pct => {
    const btn = document.getElementById(`btn-propina-${pct}`);
    if (btn) btn.addEventListener('click', () => procesarPropina(pct));
  });
  console.log('✅ S11 Req 5: Calculadora de propinas lista');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 6 · LISTA DE TAREAS
   Array + forEach + Funciones anónimas
───────────────────────────────────────────────────────────── */
let tareas = [];

const renderTareas = () => {
  const lista = document.getElementById('lista-tareas');
  if (!lista) return;

  lista.innerHTML = '';
  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${tarea}</span>
      <button class="btn btn-sm btn-danger" data-index="${index}">🗑️ Eliminar</button>`;
    lista.appendChild(li);
  });

  lista.querySelectorAll('[data-index]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = parseInt(e.target.getAttribute('data-index'));
      tareas.splice(i, 1);
      renderTareas();
      console.log(`🗑️ Tarea eliminada. Quedan: ${tareas.length}`);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const btnAgregar = document.getElementById('btn-agregar-tarea');
  const inputTarea = document.getElementById('input-tarea');

  if (btnAgregar && inputTarea) {
    btnAgregar.addEventListener('click', function () {
      const texto = inputTarea.value.trim();
      if (texto === '') { alert('⚠️ Escribe una tarea antes de agregar.'); return; }
      tareas.push(texto);
      inputTarea.value = '';
      renderTareas();
      console.log(`✏️ Tarea agregada: "${texto}"`);
    });

    inputTarea.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') btnAgregar.click();
    });
  }

  console.log('✅ S11 Req 6: Lista de tareas lista');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 7 · GENERADOR DE NÚMEROS PARES
   Bucle for + Array
───────────────────────────────────────────────────────────── */
const generarPares = () => {
  const inputN    = document.getElementById('cantidad-pares');
  const resultado = document.getElementById('resultado-pares');
  if (!inputN || !resultado) return;

  let n = parseInt(inputN.value);
  let advertencia = '';

  if (isNaN(n) || n <= 0) {
    resultado.innerHTML = '<span class="text-danger">⚠️ Ingresa un número válido.</span>';
    return;
  }

  if (n > 20) {
    advertencia = '<div class="alert alert-warning">⚠️ Límite máximo: 20 números pares.</div>';
    n = 20;
  }

  const pares = [];
  for (let i = 1; pares.length < n; i++) {
    if (i % 2 === 0) pares.push(i);
  }

  console.log(`🔢 Primeros ${n} pares:`, pares);
  resultado.innerHTML = `${advertencia}
    <div class="mt-2">
      <strong>🔢 Primeros ${n} números pares:</strong><br>
      ${pares.map(p => `<span class="badge bg-primary me-1">${p}</span>`).join('')}
    </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-generar-pares');
  if (btn) btn.addEventListener('click', generarPares);
  console.log('✅ S11 Req 7: Generador de pares listo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 8 · RELOJ DIGITAL EN VIVO
   setInterval + Funciones flecha
───────────────────────────────────────────────────────────── */
let intervaloReloj = null;
let relojActivo    = true;

const actualizarReloj = () => {
  const reloj = document.getElementById('reloj');
  if (!reloj) return;
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, '0');
  const mm = String(ahora.getMinutes()).padStart(2, '0');
  const ss = String(ahora.getSeconds()).padStart(2, '0');
  reloj.textContent = `🕐 ${hh}:${mm}:${ss}`;
};

const iniciarReloj = () => {
  actualizarReloj();
  intervaloReloj = setInterval(actualizarReloj, 1000);
  relojActivo = true;
};

const detenerReloj = () => {
  clearInterval(intervaloReloj);
  relojActivo = false;
};

document.addEventListener('DOMContentLoaded', () => {
  iniciarReloj();
  const btnReloj = document.getElementById('btn-toggle-reloj');
  if (btnReloj) {
    btnReloj.addEventListener('click', () => {
      if (relojActivo) {
        detenerReloj();
        btnReloj.textContent = '▶️ Iniciar';
      } else {
        iniciarReloj();
        btnReloj.textContent = '⏹️ Detener';
      }
    });
  }
  console.log('✅ S11 Req 8: Reloj digital activo');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 9 · TOOLTIP PERSONALIZADO
   Eventos mouseover/mouseout + funciones anónimas
───────────────────────────────────────────────────────────── */
const infoTooltip = {
  'Vacío Infinito': '📖 Expansión de Dominio que satura la mente con información ilimitada. Rango: Especial.',
  'Rojo': '📖 Técnica reversa que invierte la atracción del Azul generando una repulsión devastadora.',
  'Azul': '📖 Amplifica la Técnica Maldita creando un vacío que colapsa toda materia hacia sí mismo.'
};

document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.id = 'custom-tooltip';
  tooltip.style.cssText = `
    position: fixed;
    background: rgba(10,10,30,0.95);
    color: #a0c4ff;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 13px;
    max-width: 250px;
    pointer-events: none;
    display: none;
    z-index: 9999;
    border: 1px solid #4a90d9;
    box-shadow: 0 4px 15px rgba(0,100,255,0.3);
  `;
  document.body.appendChild(tooltip);

  document.querySelectorAll('.project-card').forEach(card => {
    const titulo = card.querySelector('.card-title')?.textContent?.trim() || '';
    const clave  = Object.keys(infoTooltip).find(k => titulo.includes(k));

    if (clave) {
      card.addEventListener('mouseover', function (e) {
        tooltip.textContent = infoTooltip[clave];
        tooltip.style.display = 'block';
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top  = (e.clientY + 15) + 'px';
      });
      card.addEventListener('mousemove', function (e) {
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top  = (e.clientY + 15) + 'px';
      });
      card.addEventListener('mouseout', function () {
        tooltip.style.display = 'none';
      });
    }
  });

  console.log('✅ S11 Req 9: Tooltips personalizados listos');
});


/* ─────────────────────────────────────────────────────────────
   S11 · REQ 10 · DEPURACIÓN Y BUENAS PRÁCTICAS
   (Dark mode y saludo ya están implementados en S10 R1 y R2
    con lógica mejorada y fusionada — sin duplicados)
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ S11 Req 10: Buenas prácticas aplicadas');
  console.log('🎌 呪術高専 — Script Semana 11 cargado correctamente');
});


/* ─────────────────────────────────────────────────────────────
   FIN DEL SCRIPT FUSIONADO
───────────────────────────────────────────────────────────── */
console.log("✅ gojo-script-fusionado.js: S10 R1–R10 + S11 R1–R10 cargados sin conflictos.");


/* ═══════════════════════════════════════════════════════════════
   ██████████████  SEMANA 12 — JAVASCRIPT III  ██████████████
   Arreglos · Objetos · Manipulación del DOM
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   S12 · EJ 1 · SISTEMA DE GESTIÓN DE TÉCNICAS (ARREGLOS + OBJETOS)
   Ejercicio 1 del Lab 12 adaptado al universo Gojo.
   Arreglo de 3 proyectos con nombre, tecnología y estado.
   Funciones: agregarProyecto() y filtrarPorEstado().
───────────────────────────────────────────────────────────── */

// 1. ARREGLO DE PROYECTOS (temática Gojo)
const proyectos = [
  { id: 1, nombre: "Portafolio Gojo",    tecnologia: "HTML/CSS",    estado: "completado"  },
  { id: 2, nombre: "Dominio Infinito",   tecnologia: "JavaScript",  estado: "en-progreso" },
  { id: 3, nombre: "Técnica Maldita UI", tecnologia: "React",       estado: "pendiente"   }
];

// 2. FUNCIÓN PARA AGREGAR PROYECTO
function agregarProyecto(nombre, tecnologia, estado) {
  const nuevo = {
    id: proyectos.length + 1,
    nombre,
    tecnologia,
    estado
  };
  proyectos.push(nuevo);
  return nuevo;
}

// 3. FUNCIÓN PARA FILTRAR POR ESTADO
function filtrarPorEstado(estado) {
  return proyectos.filter(p => p.estado === estado);
}

// 4. PRUEBAS EN CONSOLA (Ejercicio 1)
console.log("📁 TODOS LOS PROYECTOS:");
console.table(proyectos);

console.log("\n✅ PROYECTOS COMPLETADOS:");
console.table(filtrarPorEstado("completado"));

console.log("\n➕ AGREGANDO NUEVO PROYECTO:");
console.log(agregarProyecto("Six Eyes Dashboard", "TypeScript", "en-progreso"));
console.table(proyectos);


/* ─────────────────────────────────────────────────────────────
   S12 · EJ 2 · LISTA DE MISIONES (DOM BÁSICO)
   Ejercicio 2 del Lab 12 adaptado: lista de tareas/misiones.
   Agregar misiones · toggle completado · contador de pendientes.
   Se monta sobre el contenedor #gojo-misiones si existe en el HTML,
   si no, se inyecta automáticamente al final del <main> o <body>.
───────────────────────────────────────────────────────────── */

// --- ESTILOS DE LA SECCIÓN DE MISIONES ---
const misionesCSS = `
  #seccion-misiones {
    background: rgba(20, 8, 30, 0.88);
    border: 2px solid #a855f7;
    border-radius: 16px;
    padding: 28px;
    margin: 32px auto;
    max-width: 640px;
  }
  #seccion-misiones h2 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 2px solid #a855f7;
    padding-bottom: 10px;
    margin-bottom: 18px;
    color: #e9d5ff;
  }
  .mision-input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
  }
  .mision-input-group input {
    flex: 1;
    padding: 9px 14px;
    background: rgba(40, 10, 50, 0.9);
    border: 2px solid #7c3aed;
    border-radius: 8px;
    color: #e9d5ff;
    font-size: 0.95rem;
    outline: none;
  }
  .mision-input-group input::placeholder { color: #9980b0; }
  .mision-input-group input:focus { border-color: #c084fc; }
  .mision-input-group button {
    padding: 9px 18px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: opacity 0.2s;
  }
  .mision-input-group button:hover { opacity: 0.85; }
  .mision-contador {
    background: rgba(124, 58, 237, 0.18);
    border: 1px solid #7c3aed;
    border-radius: 8px;
    padding: 8px 14px;
    margin-bottom: 14px;
    font-size: 0.9rem;
    color: #c4b5fd;
  }
  .mision-contador span { font-weight: bold; color: #f0abfc; }
  .mision-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: rgba(60, 20, 80, 0.55);
    margin-bottom: 8px;
    border-radius: 8px;
    border-left: 4px solid #7c3aed;
    transition: opacity 0.2s;
  }
  .mision-item.completada {
    border-left-color: #22c55e;
    opacity: 0.65;
  }
  .mision-item.completada .mision-texto {
    text-decoration: line-through;
    color: #86efac;
  }
  .mision-texto {
    flex: 1;
    margin: 0 10px;
    color: #e9d5ff;
    font-size: 0.92rem;
  }
  .btn-mision-completar {
    background: #16a34a;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 6px;
    font-size: 0.85rem;
  }
  .btn-mision-completar:hover { background: #15803d; }
  .btn-mision-eliminar {
    background: #dc2626;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
  }
  .btn-mision-eliminar:hover { background: #b91c1c; }
`;

const styleMisiones = document.createElement("style");
styleMisiones.id = "misiones-styles";
styleMisiones.textContent = misionesCSS;
document.head.appendChild(styleMisiones);

// --- DATOS INICIALES ---
let misiones = [
  { id: 1, texto: "Entrenar a Yuji Itadori",         completada: false },
  { id: 2, texto: "Eliminar maldición grado especial", completada: true  }
];
let siguienteMisionId = 3;

// --- INYECTAR CONTENEDOR SI NO EXISTE ---
function obtenerContenedorMisiones() {
  let sec = document.getElementById("gojo-misiones");
  if (!sec) {
    sec = document.createElement("section");
    sec.id = "gojo-misiones";
    sec.className = "seccion";
    const main = document.querySelector("main") || document.body;
    main.appendChild(sec);
  }
  return sec;
}

// --- RENDERIZAR MISIONES ---
function renderizarMisiones() {
  const sec = obtenerContenedorMisiones();

  // Construir estructura si aún no existe
  if (!document.getElementById("seccion-misiones")) {
    sec.innerHTML = `
      <div id="seccion-misiones">
        <h2>⚡ Misiones Jujutsu</h2>
        <div class="mision-input-group">
          <input type="text" id="input-mision" placeholder="Nueva misión...">
          <button id="btn-agregar-mision">Agregar</button>
        </div>
        <div class="mision-contador">
          🔴 Misiones pendientes: <span id="contador-misiones">0</span>
        </div>
        <div id="lista-misiones"></div>
      </div>`;

    // Eventos (solo se registran la primera vez)
    const btnAgregar = document.getElementById("btn-agregar-mision");
    const inputMision = document.getElementById("input-mision");
    if (btnAgregar) btnAgregar.addEventListener("click", agregarMision);
    if (inputMision) inputMision.addEventListener("keypress", e => {
      if (e.key === "Enter") agregarMision();
    });
  }

  const lista     = document.getElementById("lista-misiones");
  const contador  = document.getElementById("contador-misiones");
  if (!lista || !contador) return;

  lista.innerHTML = "";
  let pendientes  = 0;

  misiones.forEach(m => {
    if (!m.completada) pendientes++;

    const div = document.createElement("div");
    div.className = `mision-item${m.completada ? " completada" : ""}`;
    div.innerHTML = `
      <span class="mision-texto">${m.texto}</span>
      <div>
        <button class="btn-mision-completar" onclick="toggleMision(${m.id})">
          ${m.completada ? "↩️" : "✅"}
        </button>
        <button class="btn-mision-eliminar" onclick="eliminarMision(${m.id})">🗑️</button>
      </div>`;
    lista.appendChild(div);
  });

  contador.textContent = pendientes;
}

function agregarMision() {
  const input = document.getElementById("input-mision");
  if (!input) return;
  const texto = input.value.trim();
  if (texto === "") { alert("⚠️ Escribe una misión antes de agregar."); return; }
  misiones.push({ id: siguienteMisionId++, texto, completada: false });
  input.value = "";
  renderizarMisiones();
  console.log(`✏️ Misión agregada: "${texto}"`);
}

function toggleMision(id) {
  const m = misiones.find(m => m.id === id);
  if (m) { m.completada = !m.completada; renderizarMisiones(); }
}

function eliminarMision(id) {
  if (confirm("¿Eliminar esta misión?")) {
    misiones = misiones.filter(m => m.id !== id);
    renderizarMisiones();
    console.log(`🗑️ Misión eliminada. Quedan: ${misiones.length}`);
  }
}


/* ─────────────────────────────────────────────────────────────
   S12 · EJ 3 · ANÁLISIS DE CÓDIGO (DOM selectors)
   Respuesta documentada: opciones a, c y d son válidas;
   b falla porque getElementsByClassName devuelve una
   HTMLCollection, no un elemento directo.
───────────────────────────────────────────────────────────── */

/*
  ✅ EJERCICIO 3 — Respuesta:

  El elemento tiene id="titulo", por lo que los selectores válidos son:

  a) document.getElementById("titulo").innerHTML = "Asunto solucionado";
     ✅ Válido — getElementById retorna el elemento directamente.

  b) document.getElementsByClassName("titulo").innerText = "...";
     ❌ Inválido — "titulo" es un id, no una clase. Además,
        getElementsByClassName retorna una HTMLCollection (colección),
        asignar .innerText a la colección no modifica nada.

  c) document.querySelector("#titulo").textContent = "Asunto solucionado";
     ✅ Válido — querySelector con "#titulo" selecciona por id correctamente.

  d) document.getElementsByTagName("h1")[0].innerHTML = "Asunto solucionado";
     ✅ Válido — Selecciona el primer <h1> del documento (que es el #titulo).

  💡 RESPUESTAS CORRECTAS: a, c y d (las tres modifican el texto correctamente).
     La más idiomática y directa es: a) getElementById  o  c) querySelector.
*/


/* ─────────────────────────────────────────────────────────────
   S12 · EJ 4 · PROYECTO INTEGRADOR — SECCIÓN DE PROYECTOS + MISIONES
   Renderiza los proyectos del EJ1 en el DOM con tarjetas visuales,
   y monta la lista de misiones del EJ2.
   Se integra al portfolio Gojo existente.
───────────────────────────────────────────────────────────── */

// Estilos para la sección de proyectos S12
const proyectosCSS = `
  #seccion-proyectos-s12 {
    background: rgba(20, 8, 30, 0.88);
    border: 2px solid #38bdf8;
    border-radius: 16px;
    padding: 28px;
    margin: 32px auto;
    max-width: 720px;
  }
  #seccion-proyectos-s12 h2 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 2px solid #38bdf8;
    padding-bottom: 10px;
    margin-bottom: 18px;
    color: #e0f2fe;
  }
  .proyecto-card-s12 {
    background: rgba(14, 30, 50, 0.7);
    padding: 12px 16px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-left: 5px solid #38bdf8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  .proyecto-card-s12.completado  { border-left-color: #22c55e; }
  .proyecto-card-s12.en-progreso { border-left-color: #f59e0b; }
  .proyecto-card-s12.pendiente   { border-left-color: #6b7280; }
  .proyecto-card-s12 .proy-nombre {
    font-weight: bold;
    color: #e0f2fe;
    font-size: 0.97rem;
  }
  .proyecto-card-s12 .proy-tech {
    display: inline-block;
    background: rgba(56, 189, 248, 0.18);
    border: 1px solid #38bdf8;
    color: #7dd3fc;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.78rem;
  }
  .proyecto-card-s12 .proy-estado {
    font-size: 0.82rem;
    color: #94a3b8;
  }
  .btn-filtro-s12 {
    margin-right: 8px;
    margin-bottom: 12px;
    padding: 6px 14px;
    border: 1px solid #38bdf8;
    background: transparent;
    color: #7dd3fc;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.83rem;
    transition: background 0.2s, color 0.2s;
  }
  .btn-filtro-s12:hover, .btn-filtro-s12.activo {
    background: #38bdf8;
    color: #0c1a2e;
  }
`;

const styleProyectos = document.createElement("style");
styleProyectos.id = "proyectos-s12-styles";
styleProyectos.textContent = proyectosCSS;
document.head.appendChild(styleProyectos);

function renderizarProyectosS12(filtro = "todos") {
  const container = document.getElementById("proyectos-list-s12");
  if (!container) return;

  const lista = filtro === "todos" ? proyectos : filtrarPorEstado(filtro);
  const emojis = { completado: "✅", "en-progreso": "🔄", pendiente: "⏳" };

  container.innerHTML = "";
  lista.forEach(p => {
    const div = document.createElement("div");
    div.className = `proyecto-card-s12 ${p.estado}`;
    div.innerHTML = `
      <span class="proy-nombre">${p.nombre}</span>
      <span class="proy-tech">${p.tecnologia}</span>
      <span class="proy-estado">${emojis[p.estado] || "❓"} ${p.estado}</span>`;
    container.appendChild(div);
  });
}

// Inyectar sección integrada al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {

  // ── Sección Proyectos S12 ──
  const mainEl = document.querySelector("main") || document.body;

  const secProyectos = document.createElement("section");
  secProyectos.id = "gojo-proyectos-s12";
  secProyectos.innerHTML = `
    <div id="seccion-proyectos-s12">
      <h2>📁 Proyectos – Semana 12</h2>
      <div id="filtros-s12">
        <button class="btn-filtro-s12 activo" data-filtro="todos">Todos</button>
        <button class="btn-filtro-s12" data-filtro="completado">✅ Completados</button>
        <button class="btn-filtro-s12" data-filtro="en-progreso">🔄 En progreso</button>
        <button class="btn-filtro-s12" data-filtro="pendiente">⏳ Pendientes</button>
      </div>
      <div id="proyectos-list-s12"></div>
    </div>`;
  mainEl.appendChild(secProyectos);

  // Render inicial de proyectos
  renderizarProyectosS12("todos");

  // Eventos de filtros
  document.querySelectorAll(".btn-filtro-s12").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-filtro-s12").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      renderizarProyectosS12(btn.dataset.filtro);
    });
  });

  // ── Sección Misiones S12 ──
  renderizarMisiones();

  console.log("✅ S12 Ej4: Proyecto integrador montado");
  console.log(`📁 ${proyectos.length} proyectos | ⚡ ${misiones.length} misiones`);
});


/* ─────────────────────────────────────────────────────────────
   FIN DEL SCRIPT FUSIONADO — S12 añadido
───────────────────────────────────────────────────────────── */
console.log("✅ gojo-script.js: S10 R1–R10 + S11 R1–R10 + S12 Ej1–Ej4 cargados sin conflictos.");