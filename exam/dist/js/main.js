var sliderFirst=function(){document.getElementById("prev").addEventListener("click",function(){e[t].style.display="none",t-=1,t<0&&(t=e.length-1),e[t].style.display="block"}),document.getElementById("next").addEventListener("click",function(){e[t].style.display="none",t+=1,t>=e.length&&(t=0),e[t].style.display="block"});var e=document.querySelectorAll(".sliderFirst .slider__item"),t=0},sliderSecond=function(){document.getElementById("prev2").addEventListener("click",function(){e[t].style.display="none",t-=1,t<0&&(t=e.length-1),e[t].style.display="block"}),document.getElementById("next2").addEventListener("click",function(){e[t].style.display="none",t+=1,t>=e.length&&(t=0),e[t].style.display="block"});var e=document.querySelectorAll(".sliderSecond .slider__item"),t=0},sliderThird=function(){document.getElementById("prev3").addEventListener("click",function(){e[t].style.display="none",t-=1,t<0&&(t=e.length-1),e[t].style.display="block"}),document.getElementById("next3").addEventListener("click",function(){e[t].style.display="none",t+=1,t>=e.length&&(t=0),e[t].style.display="block"});var e=document.querySelectorAll(".sliderThird .slider__item"),t=0};sliderFirst(),sliderSecond(),sliderThird();