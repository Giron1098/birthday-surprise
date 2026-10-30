const revealButton = document.querySelector("#revealButton");
const revealSection = document.querySelector("#reveal");
const yesButton = document.querySelector("#yesButton");
const response = document.querySelector("#response");
const cancion = new Audio("music.m4a");

revealButton.addEventListener("click", () => {
  revealSection.hidden = false;
  revealSection.scrollIntoView({ behavior: "smooth", block: "start" });
  revealButton.textContent = "Sorpresa desbloqueada ♡";
  revealButton.disabled = true;
  revealButton.style.opacity = ".7";
});

yesButton.addEventListener("click", () => {
  cancion.currentTime = 40.8;
  cancion.play();
  response.hidden = false;
  yesButton.textContent = "¡Sabía que dirías que sí! ♡";
  yesButton.disabled = true;
  response.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
