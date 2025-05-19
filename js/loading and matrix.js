window.addEventListener('DOMContentLoaded', function () {
  // Устанавливаем таймер для переадресации
  setTimeout(() => {
    window.location.href = 'sciencepc.html'; // Укажите путь к вашей главной странице
  }, 3000); // Задержка в миллисекундах (3 секунды)
});

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * (height / fontSize)));

function drawMatrix() {
  ctx.fillStyle = 'rgba(255,255,255,0.15)'; // светлый прозрачный фон
  ctx.fillRect(0, 0, width, height);

  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#111'; // Тёмные буквы для белого фона
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 40);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});