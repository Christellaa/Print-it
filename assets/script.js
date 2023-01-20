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
];


const bulletpoint = document.getElementById("bullet_point");
let bannerImg = document.getElementById("banner-img");

let bannerImgFileName = bannerImg.src.substring(bannerImg.src.lastIndexOf("/") + 1, bannerImg.src.length);

for (let i = 0; i < slides.length; i++) {
	let dotElement = document.createElement("div");
	dotElement.className = "dot";
	bulletpoint.appendChild(dotElement);

	if(bannerImgFileName === slides[i].image) {
		dotElement.className += " dot_selected";
	};
};


document.getElementById("slide_left").addEventListener('click', function() {
	//alert("Previous slide");
	let previousImgIndex = 0;
	let bannerP = document.getElementById("banner-p");
	let dotElement = document.getElementsByClassName("dot");
	
	for (let i = 0; i < slides.length; i++) {
		if(bannerImgFileName === slides[0].image) {
			bannerImg.src = "./assets/images/slideshow/" + slides[slides.length - 1].image;
			previousImgIndex = slides.length - 1;
			dotElement[previousImgIndex].classList.add("dot_selected");
			dotElement[0].classList.remove("dot_selected");
		} else if(bannerImgFileName === slides[i].image) {
			bannerImg.src = "./assets/images/slideshow/" + slides[i - 1].image;
			dotElement[i - 1].classList.add("dot_selected");
			dotElement[i].classList.remove("dot_selected");
			previousImgIndex = i - 1;
		}
	}
	bannerImgFileName = slides[previousImgIndex].image;
	bannerP.innerHTML = slides[previousImgIndex].tagLine;
});

document.getElementById("slide_right").addEventListener('click', function() {
	//alert("Next slide");
	let nextImgIndex = 0;
	let previousImgIndex = 0;
	let bannerP = document.getElementById("banner-p");
	let dotElement = document.getElementsByClassName("dot");
	
	for (let i = 0; i < slides.length; i++) {
		if(bannerImgFileName === slides[i].image) {
			bannerImg.src = "./assets/images/slideshow/" + slides[i + 1].image;
			nextImgIndex = i + 1;
			previousImgIndex = i;
			dotElement[nextImgIndex].classList.add("dot_selected");
			dotElement[previousImgIndex].classList.remove("dot_selected");
		} else if(bannerImgFileName === slides[slides.length - 1].image) {
			bannerImg.src = "./assets/images/slideshow/" + slides[0].image;
			dotElement[0].classList.add("dot_selected");
			dotElement[slides.length - 1].classList.remove("dot_selected");
			bannerImgFileName = slides[nextImgIndex].image;
			bannerP.innerHTML = slides[nextImgIndex].tagLine;
		}
	}
	bannerImgFileName = slides[nextImgIndex].image;
	bannerP.innerHTML = slides[nextImgIndex].tagLine;
});