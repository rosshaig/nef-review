jQuery(document).ready(function($){



	/**
	 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
	 *
	 * jQuery.browser.mobile will be true if the browser is a mobile device
	 *
	 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego|android|ipad|playbook|silk).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


if (jQuery.browser.mobile){

}

else {

	$(function(){

	  var $window = $(window);
		var scrollTime = 1.2;
		var scrollDistance = 200;

		$window.on("mousewheel DOMMouseScroll", function(event){

			event.preventDefault();

			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);

			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,
					overwrite: 5
				});

		});
	});

//STICKY HEADER

	$(window).scroll(function() {
	if ($(this).scrollTop() > 500){
	    $('header').addClass("sticky");
	  }
	  else{
	    $('header').removeClass("sticky");
	  }
	});




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

		new ScrollMagic.Scene({triggerElement: "#parallax-money"})
			.setTween("#parallax-money > div", {y: "80%", ease: Linear.easeNone})
			.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-social"})
				.setTween("#parallax-social > div", {y: "80%", ease: Linear.easeNone})
				.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-banking"})
						.setTween("#parallax-banking > div", {y: "80%", ease: Linear.easeNone})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-local"})
						.setTween("#parallax-local > div", {y: "80%", ease: Linear.easeNone})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-wellbeing"})
						.setTween("#parallax-wellbeing > div", {y: "80%", ease: Linear.easeNone})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-inequality"})
						.setTween("#parallax-inequality > div", {y: "80%", ease: Linear.easeNone})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallax-numbers"})
							.setTween("#parallax-numbers > div", {y: "80%", ease: Linear.easeNone})
							.addTo(controller);

		var controller = new ScrollMagic.Controller();



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



}


//SMOOTH SCROLL



//Animate figures

var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({
						triggerElement: "#trigger-1"
					})
					.setTween("#animate1", 1.0, {scale: 1.2}) // trigger a TweenMax.to tween
					.addTo(controller);


					//TIMELINE

						var timelineBlocks = $('.cd-timeline-block'),
							offset = 0.8;

						hideBlocks(timelineBlocks, offset);

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


//
// var scene = new ScrollMagic.Scene({
// 											triggerElement: "#trigger-2"
// 										})
// 										.setTween("#animate2", 0.5, {scale: 1.5}) // trigger a TweenMax.to tween
// 										.addTo(controller);
//
//
// 	var scene = new ScrollMagic.Scene({
// 											triggerElement: "#trigger-3"
// 										})
// 										.setTween("#animate3", 0.5, {scale: 1.5}) // trigger a TweenMax.to tween
// 										.addTo(controller);
});
