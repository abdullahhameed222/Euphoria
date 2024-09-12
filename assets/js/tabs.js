const tabsEl = document.querySelectorAll(".product__description-tab h3")
const tabsContentEl = document.querySelectorAll(".product__description-info")
console.log(tabsContentEl)


tabsEl[0].classList.add("active")
tabsContentEl[0].classList.add("active")
tabsEl.forEach(function(tab){
  tab.addEventListener("click",function(){
    const wasActive = tab.classList.contains("active")
      tab.classList.remove("active")

      
      if (!wasActive) {
        tab.classList.add("active")
      }


    tabsContentEl.forEach(function(tabContent){
      tabContent.classList.toggle("active")
    })
  })
})
