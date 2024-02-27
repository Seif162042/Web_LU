const header = document.querySelector("header");
const fleche = document.getElementById("fleche_container")

//================================
//scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY >= 104) {
    header.style.top = "0px";
    fleche.style.opacity = "0";
  } else {
    header.style.top = "-104px";
    fleche.style.opacity = "1";
  } 
});