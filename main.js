var slideIndex = 0;
showSlide(slideIndex);

// Previous and Next controls
function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(index) {
    var slides = document.getElementsByClassName("slide");

    if (index >= slides.length) { slideIndex = 0; }
    else if (index < 0) { slideIndex = slides.length - 1; }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
});
