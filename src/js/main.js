var sliderFirst = function() {
document.getElementById('prev').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i - 1; 
     if(i < 0){
        i = images.length - 1;
     }
     images[i].style.display = 'block';
});
document.getElementById('next').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i + 1; 
     if(i >= images.length){
        i = 0;
     }
    images[i].style.display = 'block';
});
var images = document.querySelectorAll('.sliderFirst .slider__item');
var i = 0;
};

var sliderSecond = function() {
document.getElementById('prev2').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i - 1; 
     if(i < 0){
        i = images.length - 1;
     }
     images[i].style.display = 'block';
});
document.getElementById('next2').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i + 1; 
     if(i >= images.length){
        i = 0;
     }
    images[i].style.display = 'block';
});
var images = document.querySelectorAll('.sliderSecond .slider__item');
var i = 0;
};

var sliderThird = function() {
document.getElementById('prev3').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i - 1; 
     if(i < 0){
        i = images.length - 1;
     }
    images[i].style.display = 'block';
});
document.getElementById('next3').addEventListener('click', function() {
    images[i].style.display = 'none';
     i = i + 1; 
     if(i >= images.length){
        i = 0;
     }
    images[i].style.display = 'block';
});
var images = document.querySelectorAll('.sliderThird .slider__item');
var i = 0;
};

sliderFirst();
sliderSecond();
sliderThird();






