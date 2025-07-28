// Set party title from URL
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const room = params.get('room')?.toUpperCase();
  if (room) {
    document.title = `${room} - Codenames Party`;
    document.getElementById('party-title').textContent = `${room} - Codenames Party`;
  }

  loadSavedParties();
});

// Save current party
function saveCurrentParty() {
  const name = document.getElementById('party-name-input').value;
  const link = window.location.href;
  if (!name) return alert('Please enter a name for the party.');

  const saved = JSON.parse(localStorage.getItem('savedParties') || '{}');
  saved[name] = link;
  localStorage.setItem('savedParties', JSON.stringify(saved));
  loadSavedParties();
  alert('Party saved!');
}

// Load saved parties into dropdown
function loadSavedParties() {
  const select = document.getElementById('saved-parties');
  select.innerHTML = '<option value=\"\">🔽 Load Saved</option>';

  const saved = JSON.parse(localStorage.getItem('savedParties') || '{}');
  for (const [name, url] of Object.entries(saved)) {
    const opt = document.createElement('option');
    opt.value = url;
    opt.textContent = name;
    select.appendChild(opt);
  }
}

// Navigate to selected party
function loadSavedParty(url) {
  if (url) window.location.href = url;
}

function updatePartyName(val) {
  document.title = `${val || 'Codenames Party'}`;
}
