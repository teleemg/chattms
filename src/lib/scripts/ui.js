//
// GSAP
//
gsap.registerPlugin(ScrollTrigger);

//
// LENIS
//
const lenis = new Lenis({
	duration: 0.5,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	orientation: 'vertical',
	gestureOrientation: 'vertical',
	smoothWheel: true,
	wheelMultiplier: 1,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//
// DARK MODE
//
document.addEventListener('DOMContentLoaded', function () {
	const htmlElement = document.documentElement;
	const darkModeToggle = document.getElementById('dark-mode-toggle');
	const iconElement = darkModeToggle.querySelector('a');
	if (!darkModeToggle || !iconElement) {
		return;
	}
	function setTheme(isDark) {
		htmlElement.classList.toggle('dark', isDark);
		iconElement.classList.toggle('fa-sun-bright', isDark);
		iconElement.classList.toggle('fa-moon-stars', !isDark);
		localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
	}
	setTheme(htmlElement.classList.contains('dark'));
	darkModeToggle.addEventListener('click', function (e) {
		e.preventDefault();
		setTheme(!htmlElement.classList.contains('dark'));
	});
});
