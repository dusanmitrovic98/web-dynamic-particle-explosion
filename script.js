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
  particle.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px)`, opacity: 0 },
    ],
    {
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Animation easing function
      fill: "forwards", // Keep the final state of the animation
    }
  );

  // Remove the particle from the DOM after the animation completes
  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}

// Event listeners for mouse click and hover
content.addEventListener("click", (e) => {
