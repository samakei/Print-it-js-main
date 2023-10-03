const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

// Initialisation positionSlide variable
let positionSlide = 0;

function gestionDots() {
  // boucle parcourir slides
  for (i = 0; i < slides.length; i++) {
    // Créer balise div a chaque passage du i
    const dot = document.createElement("div");
    //Ajout de la class dot
    dot.classList.add("dot");

    // Vérification que i == positionSlide
    if (i === positionSlide) {
      //Ajout de l'élement dot_selected
      dot.classList.add("dot_selected");
    }
    // Attache le dot au parent dots
    dots.appendChild(dot);
  }
}

//lancement de la fonction dots
gestionDots();

// recupération nombre Dots
const dotsNbr = document.querySelectorAll(".dot");


// Ajout de l'event click pour la flèche gauche
arrow_left.addEventListener("click", function () {
  console.log("Gauche");
  //On retire -1 au positionSlide
  positionSlide -= 1;
  // Si position slide négatif
  if (positionSlide === -1) {
    //On rémet le position slide au dernier element
    positionSlide = slides.length - 1;
  }
  //aficher des points et des slides
  aficherDot();
  aficherSlide();
});
// Ajout de l'event click pour la flèche droite
arrow_right.addEventListener("click", function () {
  console.log("Droite");
  // Incrémentation du positionSlide
  positionSlide++;
  //Si positionSlide supérieur aux nombres de points
  if (positionSlide >= slides.length) {
    //Retour à 0
    positionSlide = 0;
  }
  //aficher des dots et slides
  aficherDot();
  aficherSlide();
});

function aficherDot() {
  //Récupération du dot selected
  const selected = document.querySelector(".dot_selected");
  // retirer la class a ce dots
  selected.classList.remove("dot_selected");
  // Ajouté dot_select au dots actuel
  dotsNbr[positionSlide].classList.add("dot_selected");
}

function aficherSlide() {
  // Mise a jour de l'image via les assets
  bannerImg.src = `./assets/images/slideshow/${slides[positionSlide].image}`;
  // Mise a jour du code HTML via le tagLine au lieu de innerText qui lui modifie le text d'une balise
  tagLine.innerHTML = slides[positionSlide].tagLine;
}
