const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Function to create and animate particles
function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
