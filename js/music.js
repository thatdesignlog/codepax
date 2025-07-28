function loadMusic() {
  const source = document.getElementById('music-source').value;
  const url = document.getElementById('music-url').value;
  const player = document.getElementById('music-player');

  if (source === 'youtube') {
    const match = url.match(/list=([a-zA-Z0-9_-]+)/);
    const playlistId = match ? match[1] : '';
    if (!playlistId) return alert('Invalid YouTube playlist URL.');
    player.innerHTML = `<iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=${playlistId}\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>`;
  } else if (source === 'soundcloud') {
    const scUrl = encodeURIComponent(url);
    player.innerHTML = `<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=${scUrl}&color=%23ff5500&auto_play=false&show_user=true\"></iframe>`;
  }
}
