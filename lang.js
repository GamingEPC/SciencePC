<script>
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".language-switcher");
    let currentLang = localStorage.getItem("selectedLang") || "EN"; // Сохраняем язык в localStorage

    button.textContent = currentLang; // Устанавливаем начальный язык на кнопке
    applyTranslation(currentLang);

    button.addEventListener("click", () => {
        currentLang = currentLang === "UA" ? "EN" : "UA"; // Переключаем язык
        button.textContent = currentLang;
        localStorage.setItem("selectedLang", currentLang); // Сохраняем в localStorage
        applyTranslation(currentLang);
    });
});

function applyTranslation(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const translations = JSON.parse(el.getAttribute("data-lang"));
        el.textContent = translations[lang]; // Подставляем нужный текст
    });
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
    </script>