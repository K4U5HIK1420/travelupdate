// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});


// Animation on Page Load
window.addEventListener('load', () => {
  // GSAP Animation for Hero Section Text
  gsap.from('.hero h1', { opacity: 0, y: -100, duration: 1.5 });
  gsap.from('.hero p', { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
  gsap.from('.cta', { opacity: 0, y: 100, duration: 1.5, delay: 1 });

  // GSAP Animation for Destination Cards
  const destinationCards = document.querySelectorAll('.destination-card');
  destinationCards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2 + 1.5,
    });
  });
  
  // GSAP Animation for Blog Section
  const blogPosts = document.querySelectorAll('.blog-posts article');
  blogPosts.forEach((post, index) => {
    gsap.from(post, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2 + 2,
    });
  });
});
