let cursor = document.querySelector('#cursor');
let cursorBlur = document.querySelector('#cursor-b');

let mouseX = 0, mouseY = 0;
let blurX = 0, blurY = 0;

// Update cursor position instantly
document.addEventListener('mousemove', (dets) => {
    mouseX = dets.x;
    mouseY = dets.y;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

// Smoothly animate the blur
function animateBlur() {
    // Interpolate toward mouse position
    blurX += (mouseX - 200 - blurX) * 0.1;
    blurY += (mouseY - 200 - blurY) * 0.1;

    cursorBlur.style.left = blurX + "px";
    cursorBlur.style.top = blurY + "px";

    requestAnimationFrame(animateBlur);
}

animateBlur();





gsap.to('#nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: "130px",

    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1.5
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})