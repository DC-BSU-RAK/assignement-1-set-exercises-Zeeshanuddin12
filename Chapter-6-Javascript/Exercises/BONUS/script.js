// Keep track of score
let score = 0;
let correctColor = "";

function randomRGB() {
  // Create a random RGB color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function newGame() {
  // Get all color boxes
  const boxes = document.querySelectorAll(".box");
  // Pick 3 random colors
  const colors = [randomRGB(), randomRGB(), randomRGB()];
  // Randomly choose the correct one
  const correctIndex = Math.floor(Math.random() * 3);
  correctColor = colors[correctIndex];

  // Show the correct color code to guess
  document.getElementById("rgbCode").textContent = correctColor;

  // Assign colors to boxes
  boxes.forEach((box, i) => {
    box.style.backgroundColor = colors[i];
  });

  // Reset message
  document.getElementById("message").textContent = "Click a box to guess!";
}

function checkColor(box) {
  // Compare clicked color to correct color
  if (box.style.backgroundColor === correctColor) {
    document.getElementById("message").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("message").textContent = "❌ Wrong!";
    score--;
  }
  // Update score
  document.getElementById("score").textContent = `Points: ${score}`;
  // Start a new round after a second
  setTimeout(newGame, 1000);
}

// Start the game on load
newGame();
