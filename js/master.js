var to_show_displayProp;
var to_show_2_displayProp;
var ID;
var rurul_btn;
var urban_btn;

 $(function(){
	 new WOW().init();
});

$("#home-pic").click(function(){
	$("#home-pic").hide(2000);
	$("#home-pic-hidden").show(2000);
	handler();
	show_RU();
});


 $(function(){
      $(".imgGallery").owlCarousel({
      	items : 3,
      	autoplay :true,
      	smartSpeed:700,
        loop: true,
        autoplayHoverPause :true
      });
  });
 

$("#home-pic-hidden").click(function(){
	$("#home-pic-hidden").hide(2000);
	$("#home-pic").show(2000);
    handler();   
    hide_RU();
});

function handler() {
 ID = this.id;
 //console.log(ID);
   toggle(ID);
}// handler

 rurul_btn = document.getElementById("rurul_btn");
 urban_btn = document.getElementById("urban_btn");

function toggle() {
     
     if(ID === "home-pic") {
        rurul_btn.style.display = 'none';  
        urban_btn.style.display = 'none';  
     }
     else if(ID === "home-pic-hidden") {
        rurul_btn.style.display = 'block';  
        urban_btn.style.display = 'block';  
     }


}     


 function show_RU(){
 	document.getElementById("rural_btn").innerHTML = "Rural India";
 	document.getElementById("urban_btn").innerHTML = "Urban India";
 }

 function hide_RU(){
 	document.getElementById("rural_btn").innerHTML = "";
 	document.getElementById("urban_btn").innerHTML = "";
 }
 // animate it

function smooth_scrolling(){
	$('#home_button').on('click',function(){
	$('html, body').animate({scrollTop: $("#home").offset().top},700);
});
$('#explore_button').on('click',function(){
$('html, body').animate({scrollTop: $("#rural").offset().top},700);
});
$('#event_button').on('click',function(){
$('html, body').animate({scrollTop: $("#Urban").offset().top},700);
});
$('#twitter_button').on('click',function(){
$('html, body').animate({scrollTop: $("#previous").offset().top},700);
});
$('#about_button').on('click',function(){
$('html, body').animate({scrollTop: $("#about").offset().top},700);
});
$('#contact_button').on('click',function(){
$('html, body').animate({scrollTop: $("#contact").offset().top},700);
});

}
smooth_scrolling();
