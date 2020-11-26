var showingClass = "showing"
var firstSlider = document.querySelector(".slider-item:first-child")

firstSlider.classList.add("showingClass")

function slide(){
  var currentSlide = document.querySelector(`.${showingClass}`)
  if(currentSlide){
    currentSlide.classList.remove(showingClass)
    var nextSlide = currentSlide.nextElementSibling
    if(nextSlide){
      nextSlide.classList.add(showingClass)
    }else{
    firstSlider.classList.add(showingClass) 
    }
  }else{
    firstSlider.classList.add(showingClass) 
  }
}

slide()
setInterval(slide, 7000)