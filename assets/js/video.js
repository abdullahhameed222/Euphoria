document.addEventListener("DOMContentLoaded", () => {
const videoThumbnailEl = document.querySelector(".product__description-video-thumbnail");
const videoPlayBtnEl = document.querySelector(".product__description-video-btn")
const videoEl =  document.querySelector(".product__description-intro")


videoEl.addEventListener("click",function(){
  
})

  videoPlayBtnEl.addEventListener("click",function(){
    if(videoEl.paused) {
      videoEl.play()
    }
    else {
      videoEl.pause()
    }
  });

  videoThumbnailEl.addEventListener("click",function(){
    this.classList.add("active")
  });
});