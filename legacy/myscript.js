if (screen.width < 450) 
{
	var mvp = document.getElementById('minimumViewport');
	mvp.setAttribute('content', 'width=450');
}

/*Piano Sounds*/
function playNote()
{
	/**@type {HTMLAudioElement} */
	var audio1 = arguments[0];
	if (audio1.currentTime > 0) /* Allows polyphony(simultaneous play)*/
	{
		var audio2 = audio1.cloneNode()
		audio2.play();
	}
	audio1.play();
}

for (var index = 1; index < 25; index++)
{
	document.getElementById("key" + index.toString()).addEventListener("click", function ()
	{
		var audio = document.getElementById("note" + this.id.replace("key", ""));
		playNote(audio);
	});
}

/*Mobile Nav*/
var clickedNav = false;
document.getElementById("navMobileMenu").addEventListener("click", function ()
{
	var DefaultNav = document.getElementsByClassName("DefaultNav");
	var mobileNav = document.getElementsByClassName("mobileNav");
	if (clickedNav === false)
	{
		for (var i = 0; i < DefaultNav.length; i++)
		{
			DefaultNav[i].style.display = "none";
		}
		for (var i = 0; i < mobileNav.length; i++)
		{
			mobileNav[i].style.display = "inline-block";
		}
		clickedNav = true;
	} else
	{
		for (var i = 0; i < DefaultNav.length; i++)
		{
			DefaultNav[i].style.display = "inline-block";
		}
		for (var i = 0; i < mobileNav.length; i++)
		{
			mobileNav[i].style.display = "none";
		}
		clickedNav = false;
	}
});

$(document).scroll(function ()
{
	var y = $(this).scrollTop();
	if (y > 1000)
	{
		$('.jump .blackbtn').fadeIn();
	} else
	{
		$('.jump .blackbtn').fadeOut();
	}
});

$(document).ready(function ()
{

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});
