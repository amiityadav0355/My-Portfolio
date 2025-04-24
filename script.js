function scrollDown(targetId) {
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
