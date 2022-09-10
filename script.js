const domImgs = document.getElementsByClassName("cat-img");

// const domImgsArray = Array.prototype.slice.call(domImgs,0);
const domImgsArray = [...domImgs] ;


let imgActual = domImgsArray.length-1;

function imgAnterior() {
  domImgsArray[imgActual].style.zIndex = "0"
  if (imgActual === 0) {
    domImgsArray[domImgsArray.length-1].style.zIndex = "1"
    domImgsArray[domImgsArray.length-1].classList.remove("acl-right")
    domImgsArray[domImgsArray.length-1].classList.add("acl-left")
    imgActual = domImgsArray.length-1;
  }else{
    domImgsArray[domImgsArray.length-1].classList.remove("acl-right")
    domImgsArray[domImgsArray.length-1].classList.add("acl-left")
    domImgsArray[imgActual-1].style.zIndex = "1"
    imgActual-- 
  }
}

function imgSiguiente() {
  domImgsArray[imgActual].style.zIndex = "0"
  if (imgActual === domImgsArray.length-1) {
    domImgsArray[0].classList.remove("acl-left")
    domImgsArray[0].classList.add("acl-right")
    domImgsArray[0].style.zIndex = "1"
    imgActual = 0;
  }else{
    domImgsArray[0].classList.remove("acl-left")
    domImgsArray[0].classList.add("acl-right")
    domImgsArray[imgActual+1].style.zIndex = "1"
    imgActual++
  }
}
