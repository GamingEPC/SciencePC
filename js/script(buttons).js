document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button button"); // Выбираем все кнопки
    const clickSound = new Audio("sounds/click.mp3"); // Загружаем звук

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            clickSound.currentTime = 0; // Сбрасываем звук (чтобы можно было быстро нажимать)
            clickSound.play(); // Проигрываем звук
        });
    });
});