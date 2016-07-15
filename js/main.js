$(document).ready(function(){

	//Pojawienie się formularza do logowania po wcisnieciu log in
	$("#loginButton").click(function(){
		$(".loginForm").slideToggle("slow");
	});
	
	// Wciśniecię przycisku menu
	$(".menuButton").click(function(){
		$(".mainNav1").addClass("positionFixed");
		$(".mainNav1").toggle("none");
	});

	//Pojawienie się przycisku menu po odpowiedni scrollu
	$(document).scroll(function() {
        var headerHeight = $("header").height();
        var scrollAmount = $(window).scrollTop();
        if(scrollAmount > headerHeight){
        	$(".menuButton").removeClass("none");
        }else if(scrollAmount <= headerHeight){
        	$(".menuButton").addClass("none");
        	$(".mainNav1").hide();
        }
	});

	// Pojawianie sie elementów wraz ze scrollem
	$(".section").addClass("opacity0").viewportChecker({
		classToAdd: "opacity1 animated fadeIn",
		offset: 150
	});

	//Najechanie na result container
	$(".results__container--head").hover(function(){
		$(this).siblings().toggle(500);
		$(this).removeClass("resultHeadBackgroundColor");
		$(this).addClass("resultHeadHoverBackground");
		$(this).animate({
           height: "+=20px",
           width: "+=20px"
       });
	}, function(){
		$(this).siblings().toggle(500);
		$(this).addClass("resultHeadBackgroundColor");
		$(this).removeClass("resultHeadHoverBackground");
		$(this).animate({
           height: "-=20px",
           width: "-=20px"
       });
	});

	//Najechanie na blog post
	$(".blogPost__head").hover(function(){
		$(this).removeClass("blogPostHeadBackgroundColor");
		$(this).addClass("blogPostHeadHoverBackground");
		$(this).animate({
           height: "+=20px",
           width: "+=20px"
       });
		$(this).siblings().find(".blogPostHoverChangeColor").css("color", "purple");
	}, function(){
		$(this).addClass("blogPostHeadBackgroundColor");
		$(this).removeClass("blogPostHeadHoverBackground");
		$(this).animate({
           height: "-=20px",
           width: "-=20px"
       });
		$(this).siblings().find(".blogPostHoverChangeColor").css("color", "#02baab");
	});
});