const btn = document.getElementById('btn');
const textElement = document.getElementById('text');

btn.addEventListener('click', () => {
  // クリックされてから2秒後に実行される
  setTimeout(() => {
    textElement.textContent = 'クリックしました！';
  }, 2000);
});
