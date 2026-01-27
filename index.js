// Sélection de tous les liens de navigation
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Retirer "active" de tous les liens
    navLinks.forEach(l => l.classList.remove("active"));

    // Ajouter "active" seulement au lien cliqué
    this.classList.add("active");
  });
});


const nav = document.querySelector("header");
window.addEventListener("scroll", () =>{
    if (window.scrollY > 120) {
        nav.style.top =0;
    }else {
        nav.style.top = "-50px"
    }
});

const ratio = .1

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('revele-visible')
        observer.unobserve(entry.target)
      }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(document.querySelector('[class*=class="revele-"]'))
document.querySelectorAll('[class*="revele-"]').forEach(function (r) {
  observer.observe(r)
})


// const rato = .1

// const choix = {
//   root: null,
//   rootMargin: "0px",
//   threshold: rato,
// };

// const constantePhoto = function (entries, observer) {
//     entries.forEach(function (entry) {
//       if (entry.intersectionRatio > ratio) {
//         entry.target.classList.add('photo-visible')
//         observer.unobserve(entry.target)
//       }
//     })
// }

// const observerPhoto = new IntersectionObserver(constantePhoto, options);
// observerPhoto.observe(document.querySelector('.photo'))


// const observerAnime = new IntersectionObserver(animationFonctionnalite, options);
// observerAnime.observe(document.querySelector('.photo'))