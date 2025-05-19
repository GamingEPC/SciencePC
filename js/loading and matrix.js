window.addEventListener('DOMContentLoaded', function() {
fetch('sciencepc.html')
  .then(response => response.text())
  .then(html => {
    // Помещаем предзагруженный HTML в элемент на странице.
    document.getElementById('content').innerHTML = html;
  })
  .catch(() => {
    document.querySelector('.text').textContent = 'Ошибка загрузки!';
  });
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
const drops = Array.from({length: columns}, () => Math.floor(Math.random() * (height / fontSize)));

function drawMatrix() {
  ctx.fillStyle = 'rgba(255,255,255,0.15)'; 
  ctx.fillRect(0, 0, width, height);

  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#111'; 
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