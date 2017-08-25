//image Request
window.onload = function() {
	var input = document.getElementById('search');
	var btn = document.getElementById('partners');
	
	function imgRequest () {
    	var txt = document.querySelector('#search').value;
		var URL = "https://pixabay.com/api/?key=6127853-592d2201b0e6ac0adbda2d452&q="+txt+"&per_page=7&lang=en,ru&image_type=photo";

	        ajaxGet(URL, function(data) {
				var a = JSON.parse(data);
	            var gridImg = document.getElementsByClassName('grid-img');
			    var titleImg = document.getElementsByClassName('title');					
				for (var i = 0, max = a.hits.length; i < max; i++ ) { 
					gridImg[i].src = a.hits[i].webformatURL;
					titleImg[i].innerHTML = a.hits[i].tags;
				}
			});
	}

	imgRequest();

	btn.addEventListener('click', function (e) {
    	e.preventDefault();
    	imgRequest();
  	});
  
  	input.addEventListener('keypress', function(e) {
	    if (e.keyCode === 13) {
	      e.preventDefault();
	      imgRequest();
	    }  
	});

}

function ajaxGet(url, callback) {
	var f = callback || function(data) {};
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			f(request.responseText);
		}
	}

	request.open('GET', url, true);
	request.send();
}

//masonry
var elemMsnry = document.querySelector('.grid');
var msnry = new Masonry( elemMsnry, {
  //options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item'
});