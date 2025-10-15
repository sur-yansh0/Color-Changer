// Select the button element
const button = document.getElementById("colorBtn");

// Add a click event listener
button.addEventListener("click", () => {
  // Generate a random hex color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Change the background color of the page
  document.body.style.backgroundColor = randomColor;
});
