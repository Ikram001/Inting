let count = 0;

document.getElementById("increment-btn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerHTML = count;
});

document.getElementById("decrement-btn").addEventListener("click", () => {
  count--;
  document.getElementById("counter").innerHTML = count;
});

document.getElementById("change-text-btn").addEventListener("click", () => {
  const textElement = document.getElementById("change-text");
  if (textElement.innerHTML === "Original text") {
    textElement.innerHTML = "Text changed!";
  } else {
    textElement.innerHTML = "Original text";
  }
});

document.getElementById("dark-mode-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
