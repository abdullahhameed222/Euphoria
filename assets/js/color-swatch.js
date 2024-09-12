const colorBoxes =  document.querySelectorAll(".product__color")
const colors = ['#3C4242','#EDD146','#EB84B0','#9C1F35']

colorBoxes.forEach((colorBox,index)=> {
  colorBox.style.backgroundColor = colors[index]
  colorBox.dataset.id = index + 1;

  colorBox.addEventListener("click",function(){
      this.classList.add('selected');
      const bgColor = window.getComputedStyle(this).backgroundColor;
      const style = document.createElement("style")
      const dataId = this.dataset.id;
      style.setAttribute("data-id",dataId)
      style.innerHTML = `.product__color[data-id="${dataId}"]:before { border-color:${bgColor};}`
      document.head.appendChild(style);  
  })
});









