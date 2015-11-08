jQuery(document).ready(function($){


	$(window).scroll(function() {
	if ($(this).scrollTop() > 500){
	    $('header').addClass("sticky");
	  }
	  else{
	    $('header').removeClass("sticky");
	  }
	});




	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax-intro"})
		.setTween("#parallax-intro > div", {y: "80%", ease: Linear.easeNone})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax-podcast"})
		.setTween("#parallax-podcast > div", {y: "80%", ease: Linear.easeNone})
		.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-food"})
			.setTween("#parallax-food > div", {y: "80%", ease: Linear.easeNone})
			.addTo(controller);

		var controller = new ScrollMagic.Controller();

		// // define movement of panels
		// var wipeAnimation = new TimelineMax()
		// 	// .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
		// 	// .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		// 	// .fromTo("section.inequality", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
		// 	.fromTo("section.issue.podcast", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
		// 	.fromTo("section.issue.wellbeing", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
		//
		// // create scene to pin and link animation
		// new ScrollMagic.Scene({
		// 		triggerElement: "#pinContainer",
		// 		triggerHook: "onLeave",
		// 		duration: "300%"
		// 	})
		// 	.setPin("#pinContainer")
		// 	.setTween(wipeAnimation)
		// 	.addTo(controller);




//LETTER

var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 380,	y: 20},
						{x: 500,	y: 60},
						{x: 580,	y: 20},
						{x: 620,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 660,	y: 20},
						{x: 800,	y: 130},
						{x: $(window).width() + 300,	y: -100},
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
						.setPin("#target")
						.setTween(tween)
						.addTo(controller);

});
