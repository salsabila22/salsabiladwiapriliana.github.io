$(document).ready(function () {
	$(window).scroll(function () {
		if ( $(window).scrollTop() > 80 ) {
			$('.navbar-brand').addClass('scrolltop')
		} else {
			$('.navbar-brand').removeClass('scrolltop')
		}

		if ( $(window).scrollTop() > 450 ) { 
			$('.navbar').removeClass('bg-white')
			$('.navbar').addClass('navbar-dark')
			$('.navbar').addClass('bg-primary')
			$('.navbar').css('box-shadow', '1px 3px 3px grey')
			$('.to-top').removeClass('trans')
		} else {
			$('.navbar').addClass('bg-white')
			$('.navbar').removeClass('navbar-dark')
			$('.navbar').removeClass('bg-primary')
			$('.navbar').css('box-shadow', 'none')
			$('.to-top').addClass('trans')
		}
	})
})

// document.appendChild()

document.querySelector('.to-top').addEventListener('click', function (e) {
    e.preventDefault();
    const scrollElemId = this.href.split('#')[1]
    const scrollEndElem = document.getElementById(scrollElemId);

    const anim = requestAnimationFrame((timestamp) => {
        const stamp = timestamp || new Date().getTime();
        const duration = 1200;
        const start = stamp;

        const startScrollOffset = window.pageYOffset;
        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

        scrollTo(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    })
})

const easeInCubic = function (t) {
    return t * t * t
}

const scrollTo = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInCubic(progress);

    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    if (runtime < duration) {
        requestAnimationFrame((timestamp) => {
            const currentTime = timestamp || new Date().getTime();
            scrollTo(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
        })
    }
}

document.getElementById('cv').addEventListener('click', function (e) {
    window.location.href = 'assets/Curriculum Vitae - Salsabila Dwi Apriliana.pdf'
})

document.getElementById('portofolio').addEventListener('click', function (e) {
    window.location.href = 'portofolio.html'
})

var typed = new Typed('.hello', {
	strings: ["Hello.. I'm Salsabila Dwi Apriliana</br> I'm a Student | Designer"],
	typeSpeed: 10
});