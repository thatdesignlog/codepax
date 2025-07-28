window.addEventListener('DOMContentLoaded', () => {
  const count = Math.floor(Math.random() * 5) + 1;
  document.getElementById('user-count').textContent = `👥 ${count} player${count > 1 ? 's' : ''} online`;
});
