document.getElementById('chat-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message) {
    const box = document.getElementById('chat-box');
    box.innerHTML += `<div class=\"mb-1\">💬 ${message}</div>`;
    box.scrollTop = box.scrollHeight;
    input.value = '';
  }
});

function sendReaction(emoji) {
  const box = document.getElementById('chat-box');
  box.innerHTML += `<div class=\"mb-1\">${emoji}</div>`;
  box.scrollTop = box.scrollHeight;
}
