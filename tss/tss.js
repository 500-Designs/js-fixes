/*SLIDERS FUNCTIONALITY*/
const tssSliders = document.querySelectorAll(".tss-swiper");

for (const slider of tssSliders) {
    const swiper = slider.querySelector(".swiper");
    new Swiper(swiper, {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        keyboard: {
            enabled: true
        },
        breakpoints: {
            768: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
}


/*CURSOR FUNCTIONALITY*/
const cursor = document.querySelector(".tss-cursor");
const body = document.body;
const toggleClass = "show-custom-cursor";

function pointermoveHandler(e) {
    const target = e.target;
    if (
        e.target.closest(".carousel-wrapper") &&
        window.matchMedia("(hover: hover)").matches
    ) {
        body.classList.add(toggleClass);
        cursor.style.setProperty("--cursor-x", `${e.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${e.clientY}px`);
    } else {
        body.classList.remove(toggleClass);
    }
}
document.addEventListener("pointermove", pointermoveHandler);