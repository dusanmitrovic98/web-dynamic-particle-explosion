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

  // Randomly select a color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.backgroundColor = randomColor;

  const vx = (Math.random() - 0.5) * 10; // Random horizontal velocity
  const vy = (Math.random() - 0.5) * 10; // Random vertical velocity

  // Apply animation to move particles dynamically
