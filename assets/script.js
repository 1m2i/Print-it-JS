const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0; // Index de la slide actuelle /

function changeSlide(newIndex) {
currentIndex = newIndex;

const bannerImg = document.querySelector('.banner-img');
const tagLine = bannerImg.nextElementSibling; 
bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
tagLine.innerHTML = slides[currentIndex].tagLine;


const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    if(index === currentIndex) {
	dot.classList.add('dot_selected');
    } else {
	dot.classList.remove('dot_selected');
    }
});
}

function navigateSlide(direction) {
let newIndex = currentIndex + direction;
if(newIndex < 0) {
    newIndex = slides.length - 1; // Boucle à la dernière slide si on dépasse la première
} else if(newIndex >= slides.length) {
    newIndex = 0; // Boucle à la première slide si on dépasse la dernière
}
changeSlide(newIndex);
}

document.querySelector('.arrow_left').addEventListener('click', () => navigateSlide(-1));
document.querySelector('.arrow_right').addEventListener('click', () => navigateSlide(1));

document.querySelectorAll('.dot').forEach((dot, index) => {
dot.addEventListener('click', () => changeSlide(index));
});

changeSlide(0);

