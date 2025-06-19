function createElement(className, container, content = "") {
  const element = document.createElement("div");
  element.className = className;
  element.style.left = Math.random() * 100 + "vw";
  element.style.top = Math.random() * -100 + "vh"; 
  element.style.animationDelay = Math.random() * 5 + "s";
  element.textContent = content;
  container.appendChild(element);
}

function applySeasonalEffect() {
  const container = document.getElementById("effect-container");

  if (!container) {
    console.error("Ошибка: контейнер с ID 'effect-container' не найден.");
    return;
  }

  container.innerHTML = "";

  const now = new Date();
  const month = now.getMonth();

  console.log(`Текущая дата: ${now}. Применяем эффекты для месяца ${month + 1}.`);

  if (month === 11 || month <= 1) {
    console.log("Применяем зимний эффект: падающий снег.");
    for (let i = 0; i < 50; i++) {
      createElement("snowflake", container, "❄");
    }
  } else if (month >= 2 && month <= 4) {
    console.log("Применяем весенний эффект: лепестки цветов и радуга.");

    
    const petals = ["🌸", "🌼", "🌺","🌈"];
    for (let i = 0; i < 50; i++) {
      const petal = petals[Math.floor(Math.random() * petals.length)];
      createElement("flower-petal", container, petal);
    }
  } 
  else if (month >= 5 && month <= 7) {
    console.log("Применяем летний эффект: солнечные лучи.");
    for (let i = 0; i < 10; i++) {
      createElement("sunray", container); 
    }
  } 
  else if (month >= 8 && month <= 10) {
    console.log("Применяем осенний эффект: листья и дождь.");
    for (let i = 0; i < 30; i++) {
      createElement("leaf", container, "🍁");
    }
    for (let i = 0; i < 50; i++) {
      createElement("rain-drop", container, "💧"); 
    }
  }
}

function setSeasonalBackground() {
  const now = new Date();
  const month = now.getMonth();
  let backgroundImage = "";

  if (month === 11 || month <= 1) {
    // Декабрь, Январь, Февраль — Зима
    backgroundImage = "url('https://wallpaperaccess.com/full/4222231.jpg')"; 
  } else if (month >= 2 && month <= 4) {
    // Март, Апрель, Май — Весна
    backgroundImage = "url('https://wallpaperaccess.com/full/2510382.jpg')"; 
  } else if (month >= 5 && month <= 7) {
    // Июнь, Июль, Август — Лето
    backgroundImage = "url('https://r4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-b896bd6800903c48d09c01fed852c41a.jpg')"; // летний фон
  } else if (month >= 8 && month <= 10) {
    // Сентябрь, Октябрь, Ноябрь — Осень
    backgroundImage = "url('https://wallpaperaccess.com/full/2510592.jpg')"; 
  }

  document.body.style.background = `${backgroundImage} no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";

  console.log(`Фон изменён в зависимости от сезона: ${backgroundImage}`);
}

setSeasonalBackground();

window.onload = applySeasonalEffect;

function createMusicToggleButton() {
 
  if (document.getElementById("music-toggle-btn")) return;

  const btn = document.createElement("button");
  btn.id = "music-toggle-btn";
  btn.style.position = "fixed";
  btn.style.top = "10%";
  btn.style.right = "10%";
  btn.style.zIndex = "9999";
  btn.style.background = "transparent";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.outline = "none";
  btn.style.transition = "transform 0.3s";
  btn.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
  btn.style.borderRadius = "50%";
  btn.style.padding = "0";
  btn.style.width = "64px";
  btn.style.height = "64px";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.backdropFilter = "blur(4px)";
  btn.style.animation = "floatBtn 2s infinite ease-in-out";

  
const img = document.createElement("img");
img.src = "img/aku.png"; 
img.alt = "Музыка";
img.style.width = "64px";
img.style.height = "64px";
img.style.pointerEvents = "none";
img.style.userSelect = "none";
btn.appendChild(img);

  
  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatBtn {
      0% { transform: translateY(0px);}
      50% { transform: translateY(-15px);}
      100% { transform: translateY(0px);}
    }
    #music-toggle-btn:active img {
      filter: brightness(0.8);
    }
  `;
  document.head.appendChild(style);

  
  let isPlaying = false;
  let audio = null;
  let musicSrc = "";

  
  const now = new Date();
  const month = now.getMonth();
  if (month === 11 || month <= 1) {
    musicSrc = "sounds/2-15. Snow Go - Death Trap.mp3";
  } else if (month >= 2 && month <= 4) {
    musicSrc = "sounds/2-02. Turtle Woods.mp3";
  } else if (month >= 5 && month <= 7) {
    musicSrc = "sounds/1-01. N. Sanity Beach.mp3";
  } else if (month >= 8 && month <= 10) {
    musicSrc = "sounds/5-03. Warp Room.mp3";
  }

  btn.onclick = function () {
  if (!audio) {
    audio = document.createElement("audio");
    audio.id = "seasonal-audio";
    audio.src = musicSrc;
    audio.loop = true;
    audio.style.display = "none";
    document.body.appendChild(audio);
  }
  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
      img.src = "img/uka.png";
    }).catch(() => {
      alert("Автовоспроизведение заблокировано браузером. Попробуйте ещё раз.");
    });
  } else {
    audio.pause();
    isPlaying = false;
    img.src = "img/aku.png";
  }
};
  document.body.appendChild(btn);
}

window.addEventListener("DOMContentLoaded", createMusicToggleButton);