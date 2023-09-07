const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Function to create and animate particles
function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  container.appendChild(particle);

  const colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff"]; // Array of particle colors
