// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("title").textContent = "You just changed this title using JavaScript!";
  document.getElementById("description").style.color = "blue"; // Change CSS style
});

// Add/Remove Element
document.getElementById("toggleBoxBtn").addEventListener("click", function() {
  const box = document.getElementById("box");
  if (box.style.display === "none") {
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
});
