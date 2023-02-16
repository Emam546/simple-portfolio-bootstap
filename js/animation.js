const element = document.querySelector(".anim");
const observer = new IntersectionObserver((entries) => {
    element.classList.toggle("anim", entries[0].isIntersecting);
});
observer.observe(element);

// /* If Item is in Viewport */
// function isInViewport(item) {
//     var bounding = item.getBoundingClientRect(),
//         myElementHeight = item.offsetHeight,
//         myElementWidth = item.offsetWidth;

//     if (
//         bounding.top >= -myElementHeight &&
//         bounding.left >= -myElementWidth &&
//         bounding.right <=
//             (window.innerWidth || document.documentElement.clientWidth) +
//                 myElementWidth &&
//         bounding.bottom <=
//             (window.innerHeight || document.documentElement.clientHeight) +
//                 myElementHeight
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const monster = document.getElementsByClassName("monster");

// /* Window Scrolling */
// window.addEventListener("scroll", function () {
//     if (isInViewport(monster)) {
//         monster.classList.add("animation");
//     }
// });
