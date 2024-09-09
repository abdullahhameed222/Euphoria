document.addEventListener('DOMContentLoaded', function() {
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");  
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-nav__track");

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = '$' + sliderOne.value;
    fillColor();
  }

  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = '$'+ sliderTwo.value;
    fillColor();
  }

  function fillColor() {
    let percent1 = ((sliderOne.value - sliderOne.min) / (sliderOne.max - sliderOne.min)) * 100;
    let percent2 = ((sliderTwo.value - sliderTwo.min) / (sliderTwo.max - sliderTwo.min)) * 100;
    let startPercent = Math.min(percent1,percent2);
    let endPercent = Math.max(percent1,percent2);
    sliderTrack.style.background = `linear-gradient(to right, #807D7E ${startPercent}%, #8A33FD ${startPercent}%, #8A33FD ${endPercent}%, #807D7E ${endPercent}%)`;
  }

  displayValOne.value = '$' + sliderOne.value;
  displayValTwo.value = '$' + sliderTwo.value;

  sliderOne.addEventListener("input", slideOne);
  sliderTwo.addEventListener("input", slideTwo);

  fillColor();

});









