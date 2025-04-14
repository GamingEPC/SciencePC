document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("language-toggle");
  let currentLang = localStorage.getItem("selectedLang") || "EN"; // Загружаем язык из localStorage

  if (currentLang === "UA") {
    toggle.checked = true;
  }

  applyTranslation(currentLang);

  toggle.addEventListener("change", () => {
    currentLang = toggle.checked ? "UA" : "EN"; // Переключаем язык
    localStorage.setItem("selectedLang", currentLang); // Сохраняем язык
    applyTranslation(currentLang);
  });
});

function applyTranslation(lang) {
  document.body.classList.remove("ua-font", "en-font"); // Удаляем оба класса
  document.body.classList.add(lang === "UA" ? "ua-font" : "en-font"); // Добавляем нужный класс

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const translations = JSON.parse(el.getAttribute("data-lang"));
    el.textContent = translations[lang]; // Подставляем нужный текст
  });

  // Меняем классы шрифтов
  document.body.classList.toggle("ua-font", lang === "UA");
  document.body.classList.toggle("en-font", lang === "EN");
}

document.addEventListener("DOMContentLoaded", function () {
  const clickSoundCyberEagle = new Audio("sounds/click.mp3"); // Звук для Cyber Eagle
  const redirectButton = document.getElementById("redirectButton2");

  if (redirectButton) {
    redirectButton.addEventListener("click", function () {
      clickSoundCyberEagle.currentTime = 0; // Сброс звука к началу
      clickSoundCyberEagle.play().then(() => {
        // Ждём завершения воспроизведения звука перед переадресацией
        clickSoundCyberEagle.addEventListener("ended", function () {
          window.location.href = "index.pc.ua.rx5600xt.html";
        });
      }).catch((error) => {
        console.error("Ошибка воспроизведения звука:", error);
        // Если звук не воспроизводится, сразу выполняем переадресацию
        window.location.href = "index.pc.ua.rx5600xt.html";
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const clickSoundCyberEagle = new Audio("sounds/click.mp3"); // Звук для Cyber Eagle
  const redirectButton = document.getElementById("redirectButton3");

  if (redirectButton) {
    redirectButton.addEventListener("click", function () {
      clickSoundCyberEagle.currentTime = 0; // Сброс звука к началу
      clickSoundCyberEagle.play().then(() => {
        // Ждём завершения воспроизведения звука перед переадресацией
        clickSoundCyberEagle.addEventListener("ended", function () {
          window.location.href = "index.pc.ua-eng.rx5700xt.html";
        });
      }).catch((error) => {
        console.error("Ошибка воспроизведения звука:", error);
        // Если звук не воспроизводится, сразу выполняем переадресацию
        window.location.href = "index.pc.ua-eng.rx5700xt.html";
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const clickSoundCyberEagle = new Audio("sounds/click.mp3"); // Звук для Cyber Eagle
  const redirectButton = document.getElementById("redirectButton4");

  if (redirectButton) {
    redirectButton.addEventListener("click", function () {
      clickSoundCyberEagle.currentTime = 0; // Сброс звука к началу
      clickSoundCyberEagle.play().then(() => {
        // Ждём завершения воспроизведения звука перед переадресацией
        clickSoundCyberEagle.addEventListener("ended", function () {
          window.location.href = "https://gamingepc.github.io/GamingChar/index.ua.html";
        });
      }).catch((error) => {
        console.error("Ошибка воспроизведения звука:", error);
        // Если звук не воспроизводится, сразу выполняем переадресацию
        window.location.href = "https://gamingepc.github.io/GamingChar/index.ua.html";
      });
    });
  }
});

  if (cyberEagleButton) {
    cyberEagleButton.addEventListener("click", function () {
      clickSoundCyberEagle.currentTime = 0;
      clickSoundCyberEagle
        .play()
        .then(() => {
          window.location.href = "index.pc.ua.rx5600xt.html";
        })
        .catch((error) => {
          console.error("Ошибка воспроизведения звука:", error);
          window.location.href = "index.pc.ua.rx5600xt.html";
        });
    });
  }

  if (otherButton) {
    otherButton.addEventListener("click", function () {
      clickSoundOtherButton.currentTime = 0;
      clickSoundOtherButton
        .play()
        .then(() => {
          window.location.href = "index.pc.ua.other.html";
        })
        .catch((error) => {
          console.error("Ошибка воспроизведения звука:", error);
          window.location.href = "index.pc.ua.other.html";
        });
    });
  }