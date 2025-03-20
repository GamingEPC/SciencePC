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
  
    document.querySelectorAll("[data-lang]").forEach(el => {
      const translations = JSON.parse(el.getAttribute("data-lang"));
      el.textContent = translations[lang]; // Подставляем нужный текст
    });
  
    // Меняем классы шрифтов
    document.body.classList.toggle("ua-font", lang === "UA");
    document.body.classList.toggle("en-font", lang === "EN");
  }
function switchLanguage() {
    const button = document.querySelector(".language-switcher");
    let currentLang = button.textContent.trim(); // Получаем текущий язык с кнопки
    let newLang = currentLang === "UA" ? "EN" : "UA"; // Определяем новый язык
        
        // Меняем текст на кнопке
        button.textContent = newLang;
    
        // Находим все элементы с атрибутом data-lang
        document.querySelectorAll("[data-lang]").forEach(el => {
            try {
                const translations = JSON.parse(el.getAttribute("data-lang"));
                if (translations[newLang]) {
                    el.textContent = translations[newLang]; // Меняем текст в зависимости от языка
                    console.log(`Перевод элемента: ${el.textContent}`);
                } else {
                    console.warn(`Перевод для языка ${newLang} не найден.`);
                }
            } catch (error) {
                console.error("Ошибка при парсинге атрибута data-lang:", error);
            }
        });
    }