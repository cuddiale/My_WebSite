const translations = {
  it: {
    name: "Alessio Cuddretto",
    role: "Ingegnere Informatico",
    subtitle: "Full Stack Developer · Software & Hardware",
    aboutTitle: "Su di me",
    aboutText:
      "Ingegnere informatico con forte interesse per lo sviluppo software e hardware, orientato alla risoluzione di problemi complessi.",
    experienceTitle: "Esperienze",
    exp1Title: "Studio tecnico di Architettura",
    exp1Text: "Progettazione 2D/3D, render, CAD e BIM.",
    exp2Title: "Full Stack Developer",
    exp2Text: "Sviluppo web, backend e frontend, gaming e software.",
    skillsTitle: "Competenze",
    projectsTitle: "Progetti",
    projectsText: "Consulta tutti i miei progetti e repository su GitHub.",
    contactTitle: "Contatti",
  },
  en: {
    name: "Alessio Cuddretto",
    role: "Software Engineer",
    subtitle: "Full Stack Developer · Software & Hardware",
    aboutTitle: "About me",
    aboutText:
      "Software engineer with strong interest in hardware and software development, focused on solving complex problems.",
    experienceTitle: "Experience",
    exp1Title: "Architecture Studio",
    exp1Text: "2D/3D design, rendering, CAD and BIM.",
    exp2Title: "Full Stack Developer",
    exp2Text: "Web development, backend & frontend, gaming and software.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsText: "Check all my projects and repositories on GitHub.",
    contactTitle: "Contacts",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  document.getElementById("languageModal").style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
