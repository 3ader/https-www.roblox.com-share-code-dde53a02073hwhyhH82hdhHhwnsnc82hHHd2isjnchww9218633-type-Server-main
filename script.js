// script.js

document.getElementById('changeColorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}