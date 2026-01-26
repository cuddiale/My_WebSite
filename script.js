const texts = [
  "Ingegnere Informatico",
  "Full Stack Developer",
  "UX/UI Designer",
];

let i = 0;
const el = document.getElementById("rotating-text");

setInterval(() => {
  i = (i + 1) % texts.length;
  el.textContent = texts[i];
}, 4000);
