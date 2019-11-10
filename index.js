// Slider code
let slideIndex = 0;

showSlides(slideIndex);

function currentSlide(index){
    showSlides(slideIndex = index)
}

function next() {
    showSlides(slideIndex += 1)
}
function prev() {
    showSlides(slideIndex -= 1)
}

function showSlides(index) {
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot');

    if (index >= slides.length) slideIndex = 0
    if (index < 0) slideIndex = slides.length - 1

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active')
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active')
}