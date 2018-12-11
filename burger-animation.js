const burger = document.querySelector('.burger-menu');
const line1 = burger.querySelector('.line1');
const line2 = burger.querySelector('.line2');
const line3 = burger.querySelector('.line3');

const lines = [line1, line2, line3];

const tlm = new TimelineMax({});

const toggleMenu =  new TimelineMax({paused: true, reversed: true});

burger.addEventListener('mouseenter',  () => {
    if(burger.classList.contains('js-x')) {
        return;
    }
    tlm.staggerTo(lines, .25, {scaleX: 1.5, repeat: 1, yoyo: true, ease: Power2.easeInOut, svgOrigin: "29 50"}, .125);
})

toggleMenu
    .to(line2, .125, {scaleX: 0}, 0)
    .to(line1, .125, {transformOrigin: "50% 50%", y: 9, ease: Power2.easeInOut}, "slide")
// the same labels start at the same time
    .to(line3, .125, {transformOrigin: "50% 50%", y: -9, ease: Power2.easeInOut}, "slide")
// this way we add delay "cross+=.5"
    .to(burger, .25, {rotation: 360})
    .to(line1, .25, {rotation: 45, ease: Power2.easeInOut}, "cross")
    .to(line3, .25, {rotation: -45, ease: Power2.easeInOut}, "cross")

burger.addEventListener('click', () => {
    burger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})

