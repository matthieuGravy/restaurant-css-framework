export const cookie = document.getElementById("cookie");
export const cookieAgree = document.getElementById("cookie-agree");
export const cookieDecline = document.getElementById("cookie-decline");

export function addCasperClass() {
  cookie.classList.add("casper");
}

// Ajoutez également un gestionnaire d'événements pour le bouton "Decline" si nécessaire
export function addDeclineHandler() {
  cookieDecline.addEventListener("click", addCasperClass);
}
