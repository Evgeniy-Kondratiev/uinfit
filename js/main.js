$(document).ready(function(){
    /*adaptive menu code*/
	var nav=$(".nav");
	$("#onebtn").click(function(e){
		nav.slideToggle();
	});
    $(window).resize(function(){
	        var wid = $(window).width();
	        if(wid > 956 && nav.is(':hidden')) {
	            nav.removeAttr('style');
	        }
	    });
    /*moving logo code*/
    var location=document.getElementById("header");
    location.onmousemove=movingLogo;
    function movingLogo(eventObj){
        x=eventObj.clientX;
        y=eventObj.clientY;
        var logo=document.getElementById("logo").style;
        var logoPositionX=logo.left="-"+x/20+"px"; 
        var logoPositionY=logo.top="-"+y/30+"px";
        var body=document.getElementsByTagName("body");
        bodyBack=body[0].style;
        bodyBack.backgroundPosition=x/20+"px"+" "+ y/20+"px";
    }
    
});