// MAke SLIDE Functionality.

let currentPositionCount = 0;

function moveSlide(step) {
  const images = document.querySelector(".slides");
  const totalSlides = images.children.length;

  // update current position(move lift or right).
  currentPositionCount =
    (currentPositionCount + step + totalSlides) % totalSlides;

  // get the first image width by using clientWidth property.
  const slideWidth = images.children[0].clientWidth;

  /* The negative sign (-) in translateX(-...) is important because it tells the browser to move the slides left.
  If you want to move to the next slide, you move the entire row left by the width of one slide (so the next slide comes into view). */

  images.style.transform = `translateX(-${currentPositionCount * slideWidth}px`;
}
