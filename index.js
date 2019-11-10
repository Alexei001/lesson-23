// Slider code
let sliderIndex = 0 ;

showSlider(sliderIndex);

function next(){
    showSlider(++sliderIndex);
}


function prev(){
    showSlider(--sliderIndex);
}

function currentSlide(index){
    showSlider(index);
}


function showSlider(index){
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    
    sliderIndex = index;
    if (index <0){sliderIndex = slides.length -1 }
    if (index >= slides.length){sliderIndex = 0 }

    //if(index > slides.length)

    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }
    slides[sliderIndex].style.display = 'block';
    dots[sliderIndex].classList.add('active');
}
