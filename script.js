const titles = [
  "Ingegnere Informatico",
  "Full Stack Developer",
  "UX/UI Designer",
];

let index = 0;
const textElement = document.getElementById("rotating-text");

setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % titles.length;
    textElement.textContent = titles[index];
    textElement.style.opacity = 1;
  }, 500);
}, 3000);
