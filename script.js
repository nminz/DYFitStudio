/*
<script>
const track = document.querySelector('.carousel-track');
const trackWidth = track.scrollWidth / 2; // Divide by 2 since we have duplicated content

track.addEventListener('animationiteration', () => {
  track.style.transform = 'translateX(0)';
});
</script>