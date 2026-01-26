const titles = [
  "Ingegnere Informatico",
  "Full Stack Developer",
  "UX/UI Designer",
];

let index = 0;
const text = document.getElementById("rotating-text");

setInterval(() => {
  text.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % titles.length;
    text.textContent = titles[index];
    text.style.opacity = 1;
  }, 500);
}, 3000);
