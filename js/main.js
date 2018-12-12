document.addEventListener("DOMContentLoaded", init);

function init(){
    document.getElementById("menuBtn").addEventListener("click", 
    displayMenu);
}


function displayMenu(){
    console.log("i did it");
    document.querySelector(".navmenu").classList.toggle("off");
    
}



$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

//$('#myModal').on('shown.bs.modal', function () {
//  $('#myInput').trigger('focus')
//})