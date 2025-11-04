// ====================================================
// 🚀 VERIFICACIÓN DE CARGA DEL SCRIPT
// ====================================================
alert("🔥 ¡Hey tú! Sí, tú 😎 Estás en el mejor lugar para despertar tu poder de liderazgo 💪");

// ====================================================
// 🙋‍♂️ BIENVENIDA PERSONALIZADA
// ====================================================
let nombre = prompt("👋 ¡Hola! ¿Cómo te llamas?");
if (nombre === null || nombre.trim() === "") {
  nombre = "Pro";
  alert("😎 No dijiste tu nombre... pero igual eres parte de esta aventura de liderazgo.");
} else {
  nombre = nombre.trim();
  alert(`🌟 ¡Genial verte por aquí, ${nombre}! Prepárate para una experiencia interactiva única.`);
}

// ====================================================
// 😊 ESTADO DE ÁNIMO (Condicionales y comparación)
// ====================================================
const mood = prompt(`${nombre}, ¿cómo te sientes hoy? (feliz, motivado, cansado, curioso, distraído)`);

if (!mood) {
  alert(`🙃 ${nombre}, no escribiste nada. ¡Espero que estés bien!`);
} else {
  switch (mood.toLowerCase()) {
    case "feliz":
      alert(`😄 ¡Me alegra mucho, ${nombre}! La felicidad te hace brillar como un líder auténtico.`);
      break;
    case "motivado":
      alert(`💪 Eso es, ${nombre}! La motivación es el motor de los grandes logros.`);
      break;
    case "cansado":
      alert(`😴 ${nombre}, los grandes líderes también descansan. ¡Recarga energía!`);
      break;
    case "curioso":
      alert(`🔍 La curiosidad te llevará lejos, ${nombre}. Los líderes siempre hacen preguntas.`);
      break;
    case "distraído":
      alert(`🌀 A todos nos pasa, ${nombre}. Concéntrate en tus metas y sigue adelante.`);
      break;
    default:
      alert(`🤔 No entendí eso, ${nombre}, pero seguro hoy puedes liderar con tu mejor versión.`);
  }
}

// ====================================================
// ❤️ BOTÓN "ME GUSTA" (Incremento + Aleatoriedad)
// ====================================================
const likeBtn = document.getElementById('likeBtn');
let likeCount = 0;

if (likeBtn) {
  likeBtn.addEventListener('click', () => {
    likeCount++;
    const emojis = ["👍", "🔥", "💥", "🎉", "🏆", "🚀"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    alert(`${randomEmoji} ${nombre}, llevas ${likeCount} me gusta${likeCount > 1 ? 's' : ''}. ¡Eres increíble!`);
  });
}

// ====================================================
// 📤 BOTÓN “COMPARTIR” con la API Nativa del Navegador
// ====================================================
const shareBtn = document.getElementById('shareBtn');

if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "🌐 Explora esta página sobre Liderazgo Lean & Transformación Digital.",
          url: window.location.href
        });
        alert("✅ ¡Gracias por compartir!");
      } catch (err) {
        console.log("❌ Usuario canceló el compartir o hubo un error:", err);
      }
    } else {
      // Si el navegador NO soporta navigator.share
      alert("⚠️ Tu navegador no soporta la función de compartir nativa. Usa los botones manuales.");
    }
  });
}

// Funciones de compartir
document.getElementById('shareWhatsapp').addEventListener('click', () => {
  window.open(`https://wa.me/?text=Mira esta página: ${encodeURIComponent(location.href)}`, "_blank");
});
document.getElementById('shareFacebook').addEventListener('click', () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, "_blank");
});
document.getElementById('shareTwitter').addEventListener('click', () => {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(location.href)}`, "_blank");
});
document.getElementById('shareLinkedin').addEventListener('click', () => {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`, "_blank");
});
document.getElementById('copyLink').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    alert('✅ Enlace copiado al portapapeles');
  } catch {
    alert('⚠️ No se pudo copiar el enlace');
  }
});


// ====================================================
// 🧠 MINI TRIVIA (Bucle for + break)
// ====================================================
alert("🧩 ¡Hora de una mini trivia de liderazgo! Tienes 3 intentos…");

for (let i = 1; i <= 3; i++) {
  const respuesta = prompt(`Intento ${i}/3: ¿Qué característica define a un buen líder?  
  (a) Escuchar  
  (b) Ignorar  
  (c) Imponer`);
  
  if (!respuesta) {
    alert("⚠️ Escribe una opción válida.");
    continue;
  }

  if (respuesta.toLowerCase() === "a" || respuesta.toLowerCase() === "escuchar") {
    alert(`✅ ¡Correcto, ${nombre}! Escuchar es una de las claves del liderazgo 💬`);
    break;
  } else if (i === 3) {
    alert(`❌ Se acabaron los intentos, ${nombre}. La respuesta correcta era “Escuchar”.`);
  } else {
    alert("⏳ Casi... intenta de nuevo, los líderes no se rinden.");
  }
}

// ====================================================
// 🔁 BUCLE WHILE – CONSEJO MOTIVACIONAL
// ====================================================
let contador = 0;
while (contador < 2) {
  console.log(`💫 ${nombre}, recuerda: cada paso te acerca más a tu propósito.`);
  contador++;
}

// ====================================================
// 🗣️ ENTREVISTA RÁPIDA (Múltiples preguntas + lógica)
// ====================================================
alert("🎙️ Vamos con una mini entrevista de autoconocimiento.");

const objetivo = prompt(`🎯 ${nombre}, ¿cuál es tu mayor meta este año?`);
const miedo = prompt(`😨 ¿Qué es lo que más te detiene para lograrlo?`);
const inspiracion = prompt(`🔥 ¿Quién o qué te inspira a seguir adelante?`);

if (objetivo && miedo && inspiracion) {
  alert(`✨ ${nombre}, me encanta tu propósito: "${objetivo}". Aunque te detiene "${miedo}", recuerda que tu inspiración "${inspiracion}" te dará fuerza para seguir.`);
} else {
  alert("💡 Recuerda que los líderes siempre tienen claro su propósito.");
}

// ====================================================
// 🌟 DESPEDIDA FINAL (Función + frase de liderazgo)
// ====================================================
function despedida() {
  alert(`👏 ${nombre}, gracias por participar. Eres perfecto para entrar al mundo del liderazgo. 💼  
  🌠 “El liderazgo no es mandar, es inspirar. Y tú ya lo estás haciendo.”`);
}

setTimeout(despedida, 3000);

// ====================================================
// 🔎 BUSCADOR INTERNO DE CONTENIDO
// ====================================================
const form = document.getElementById("siteSearch");
const searchInput = document.getElementById("q");

if (form && searchInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // evita que recargue la página

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      alert("Por favor, escribe un término de búsqueda.");
      return;
    }

    // Quitar resaltados anteriores
    document.querySelectorAll(".search-focus").forEach(el => {
      el.classList.remove("search-focus");
    });

    // Buscar coincidencias en el contenido visible
    const elements = document.querySelectorAll("section, article, div, p, h1, h2, h3, h4, h5");
    let found = false;

    elements.forEach(el => {
      if (el.textContent.toLowerCase().includes(query)) {
        el.classList.add("search-focus");
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    });

    if (!found) {
      alert(`No se encontró ningún resultado para "${query}".`);
    }
  });
}



