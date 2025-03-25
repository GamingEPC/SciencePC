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