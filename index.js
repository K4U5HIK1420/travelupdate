// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
document.body.classList.add('dark-mode');
document.body.style.backgroundColor = '#121212';
document.body.style.color = '#f5f5f5';
