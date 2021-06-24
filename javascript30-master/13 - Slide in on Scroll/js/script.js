
  // on récupère la ref des images
const images = document.querySelectorAll(".align-left");
const droite = document.querySelectorAll(".align-right");

const imageOptions = {
// root est l'élément sur lequel on va observer les Intersections
// par défaut c'est le viewport
root: null,
// la portion de l'élément qui doit entrer dans le viewport
// c'est une valeur entre 0 et 1
threshold: 0,
// uniquement px ou %
// permet d'étendre ou de réduire la zone de détection des collisions
rootMargin: "0px",
};

const imageObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        // console.log("Entering viewport");
      //   console.log(entry.target);
      entry.target.classList.add("active");
    } else {
      console.log("Leaving viewport");
      entry.target.classList.remove("active");
    }
  });
}, imageOptions);

images.forEach(function (image) {
  imageObserver.observe(image);
});

const imageObserverdroite = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        // console.log("Entering viewport");
      //   console.log(entry.target);
      entry.target.classList.add("active");
    } else {
      console.log("Leaving viewport");
      entry.target.classList.remove("active");
    }
  });
}, imageOptions);

droite.forEach(function (image) {
  imageObserverdroite.observe(image);
});
