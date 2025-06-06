document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button button"); // Выбираем все кнопки
    const clickSound = new Audio("sounds/click.mp3"); // Загружаем звук

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            clickSound.currentTime = 0; // Сбрасываем звук (чтобы можно было быстро нажимать)
            clickSound.play(); // Проигрываем звук
        });
    });

    document.getElementById("redirectButton").addEventListener("click", function () {
        const isUkrainian = document.body.classList.contains("ua-font"); // Проверяем, установлен ли украинский язык

        // Воспроизводим звук и добавляем задержку перед переадресацией
        clickSound.currentTime = 0; // Сбрасываем звук
        clickSound.play().then(() => {
            setTimeout(() => {
                if (isUkrainian) {
                    window.location.href = "index.pc.ua.html"; // Переадресация на украинскую версию
                } else {
                    window.location.href = "index.pc.en.html"; // Переадресация на английскую версию
                }
            }, 300); // Задержка в 300 мс (достаточно для короткого звука)
        }).catch(error => {
            console.error("Ошибка воспроизведения звука:", error);
            // Если звук не воспроизвёлся, сразу выполняем переадресацию
            if (isUkrainian) {
                window.location.href = "index.pc.ua.html";
            } else {
                window.location.href = "index.pc.en.html";
            }
        });
    });
});