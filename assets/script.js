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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const banner = document.querySelector("#banner");

const bannerImage = banner.children.item(0);
const bannerTagLine = banner.children.item(1);
const dotContainer = document.querySelector(".dots");
const dots = dotContainer.children;

let counter = 0;

//Ajouts des bullet points en bas du slider
for (let i = 1; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotContainer.appendChild(dot);
}

//Surbrillance bullet point
function dotSelected() {
	for (let i = 0; i < dots.length; i++) {
		if (i === counter) {
			dots[i].classList.add("dot_selected");
		} else {
			dots[i].classList.remove("dot_selected");
		}
	}

}

//Clic gauche
arrowLeft.addEventListener("click", function () {
	counter--; //diapositive précédente 
	if (counter < 0) {
		counter= slides.length - 1;
	} // défilement infini
	bannerImage.src = "./assets/images/slideshow/" + slides[counter].image; // maj de l'image
	bannerTagLine.innerHTML = slides[counter].tagLine; // maj du texte
	dotSelected();
});

//Clic droit
arrowRight.addEventListener("click", function () {
	counter++; // diapositive suivante
	if (counter >= slides.length) {
		counter = 0;
	} // défilement infini
	bannerImage.src = "./assets/images/slideshow/" + slides[counter].image; // maj de l'image
	bannerTagLine.innerHTML = slides[counter].tagLine; // maj du texte
	dotSelected();
});

