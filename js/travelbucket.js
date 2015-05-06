$(document).ready(function () {
        var titleslide = function () {
            $("#title").animate({top: '200px'});
        }
            window.setTimeout(titleslide, 1200);
			
		var descslide = function () {
			$("#desc").animate({left:'335px'}, 800);
		}
			window.setTimeout(descslide, 2000);
	
		var buttonslide = function () {
            $("#button").animate({bottom: '25px'});
        }
            window.setTimeout(buttonslide, 3000);
});

$(document).ready(function() {
	$('li').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);
});

$(document).ready(function() {
	$(".jumper").on("click", function() {
		$("html,body").animate({ 
			scrollTop: $( $(this).attr('href') ).offset().top 
		}, 1000);		
	});
});

$(document).scroll(function(){
	
	var y = $(document).scrollTop();
	$("#update").html(y);
	
	if (y > 200) {
		$("#gallerybg").fadeIn();
		}		
	else {
	    $("#gallerybg").fadeOut();
		} 
	
/*ITALY SECTION */
	
	if (y > 1500) {
		$("#name1").fadeIn();
		}		
	else {
	    $("#name1").fadeOut();
		}
		
	if (y > 1800) {
		$('#italyimg1').show('slide', {direction: 'right'}, 250);
	}		
	else {
		$('#italyimg1').hide('slide', {direction: 'right'}, 250);
	}
	
	if (y > 2200) {
		$('#italyimg2').show('slide', {direction: 'left'}, 250);
	}		
	else {
		$('#italyimg2').hide('slide', {direction: 'left'}, 250);
	}
	
	if (y > 2350) {
		$("#italyimg3").fadeIn();
		}
	else {
	    $("#italyimg3").fadeOut();
		}
		
	if (y > 2600) {
		$('#review1').show('slide', {direction: 'left'}, 250);
	}		
	else {
		$('#review1').hide('slide', {direction: 'left'}, 250);
	}
			
/*NEW ZEALAND SECTION */
		
	if (y > 2875) {
		$("#nzBlock1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#nzBlock1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 2950) {
		$("#nzBlock2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#nzBlock2").hide('slide', {direction: 'right'}, 250);
		}
		
/*NORWAY SECTION */

	if (y > 3550) {
		$("#name3").fadeIn();
		}		
	else {
	    $("#name3").fadeOut();
		}
		
	if (y > 3600) {
		$("#norwayimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#norwayimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 3700) {
		$("#norwayimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#norwayimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 3800) {
		$("#norwayimg3").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#norwayimg3").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 3900) {
		$("#review3").fadeIn();
		}		
	else {
	    $("#review3").fadeOut();
		}
		
/*PRAGUE SECTION */
		
	if (y > 4350) {
		$("#pragueBlock1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#pragueBlock1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 4450) {
		$("#pragueBlock2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#pragueBlock2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 4600) {
		$("#review4").fadeIn();
		}		
	else {
	    $("#review4").fadeOut();
		}
		
/*TURKEY SECTION */
		
	if (y > 4900) {
		$("#name5").fadeIn();
		}
	else {
	    $("#name5").fadeOut();
		}
		
	if (y > 5000) {
		$("#turkeyimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#turkeyimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 5100) {
		$("#turkeyimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#turkeyimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 5200) {
		$("#review5").fadeIn();
		}		
	else {
	    $("#review5").fadeOut();
		}
		
/*NEPAL SECTION */
		
	if (y > 5575) {
		$("#name6").fadeIn();
		}		
	else {
	    $("#name6").fadeOut();
		}
		
	if (y > 5650) {
		$("#nepalimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#nepalimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 5700) {
		$("#nepalimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#nepalimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 5800) {
		$("#review6").fadeIn();
		}		
	else {
	    $("#review6").fadeOut();
		}

/*BRAZIL SECTION */
		
	if (y > 6150) {
		$("#name7").fadeIn();
		}		
	else {
	    $("#name7").fadeOut();
		}
		
	if (y > 6225) {
		$("#brazilimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#brazilimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 6250) {
		$("#brazilimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#brazilimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 6450) {
		$("#review7").fadeIn();
		}		
	else {
	    $("#review7").fadeOut();
		}
		
/*MALDIVES SECTION */
		
	if (y > 6900) {
		$("#malBlock1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#malBlock1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 6950) {
		$("#malBlock2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#malBlock2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 7050) {
		$("#review8").fadeIn();
		}		
	else {
	    $("#review8").fadeOut();
		}
		
/*SWITZERLAND SECTION */

	if (y > 7500) {
		$("#name9").fadeIn();
		}		
	else {
	    $("#name9").fadeOut();
		}
		
	if (y > 7600) {
		$("#swizzimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#swizzimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 7650) {
		$("#swizzimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#swizzimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 7800) {
		$("#swizzimg3").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#swizzimg3").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 8000) {
		$("#review9").fadeIn();
		}		
	else {
	    $("#review9").fadeOut();
		}
		
/*GREECE SECTION */
		
	if (y > 8375) {
		$("#name10").fadeIn();
		}		
	else {
	    $("#name10").fadeOut();
		}
		
	if (y > 8450) {
		$("#greeceimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#greeceimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 8500) {
		$("#greeceimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#greeceimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 8675) {
		$("#review10").fadeIn();
		}		
	else {
	    $("#review10").fadeOut();
		}
		
/*CHINA SECTION */
	
	if (y > 9000) {
		$("#name11").fadeIn();
		}
	else {
	    $("#name11").fadeOut();
		}
		
	if (y > 9125) {
		$("#chinaimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#chinaimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 9150) {
		$("#chinaimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#chinaimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 9350) {
		$("#review11").fadeIn();
		}		
	else {
	    $("#review11").fadeOut();
		}
		
/*TANZANIA SECTION */
		
	if (y > 9825) {
		$("#name12").fadeIn();
		}		
	else {
	    $("#name12").fadeOut();
		}
		
	if (y > 9900) {
		$("#tanzaniaimg1").show('slide', {direction: 'left'}, 250);
		}		
	else {
	    $("#tanzaniaimg1").hide('slide', {direction: 'left'}, 250);
		}
		
	if (y > 9925) {
		$("#tanzaniaimg2").show('slide', {direction: 'right'}, 250);
		}		
	else {
	    $("#tanzaniaimg2").hide('slide', {direction: 'right'}, 250);
		}
		
	if (y > 10050) {
		$("#review12").fadeIn();
		}		
	else {
	    $("#review12").fadeOut();
		}

});