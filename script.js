function playVideo(videoId) {
  const player = document.getElementById("musicPlayer");
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}
