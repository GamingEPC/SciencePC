document.addEventListener('DOMContentLoaded', function () {
  const langButtons = {
    UA: document.getElementById('lang-ua'),
    EN: document.getElementById('lang-en'),
  };

  const elementsToTranslate = document.querySelectorAll('[data-lang]');

  // Функция для переключения языка
  function switchLanguage(lang) {
    elementsToTranslate.forEach((element) => {
      const translations = JSON.parse(element.getAttribute('data-lang'));
      if (translations[lang]) {
        element.textContent = translations[lang];
      }
    });
    localStorage.setItem('selectedLang', lang); // Сохраняем выбранный язык в localStorage
  }

  // Загружаем язык из localStorage или устанавливаем по умолчанию
  const savedLang = localStorage.getItem('selectedLang') || 'EN';
  switchLanguage(savedLang); // Применяем сохранённый язык при загрузке страницы

  // Добавляем обработчики событий для кнопок
  langButtons.UA.addEventListener('click', () => switchLanguage('UA'));
  langButtons.EN.addEventListener('click', () => switchLanguage('EN'));
});