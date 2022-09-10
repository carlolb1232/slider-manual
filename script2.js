const domImgs = document.getElementsByClassName("cat-img");

const domImgsArray = Array.prototype.slice.call(domImgs,0);


let imgActual = domImgsArray.length-1;

for (let i = 0; i < domImgsArray.length; i++) {
  domImgsArray[i].style.display = "none"
}

domImgsArray[domImgsArray.length-1].style.display = "initial";

function imgAnterior() {
  setTimeout(()=>{
    domImgsArray[imgActual].style.display = "none"
  },2001)
  console.log(domImgsArray[imgActual]);
  if (imgActual === 0) {
    domImgsArray[domImgsArray.length-1].style.display = "initial"
    domImgsArray[imgActual].classList.remove("acl-right")
    domImgsArray[imgActual].classList.add("acl-left")
    imgActual = domImgsArray.length-1;
  }else{
    domImgsArray[imgActual-1].style.display = "initial"
    domImgsArray[domImgsArray.length-1].classList.remove("acl-right")
    domImgsArray[domImgsArray.length-1].classList.add("acl-left")
    imgActual-- 
  }
}

function imgSiguiente() {
  setTimeout(()=>{
    domImgsArray[imgActual].style.display = "none"
  },2001)
  if (imgActual === domImgsArray.length-1) {
    domImgsArray[0].style.display = "initial"
    domImgsArray[imgActual].classList.remove("acl-left")
    domImgsArray[imgActual].classList.add("acl-right")
    imgActual = 0;
  }else{
    domImgsArray[imgActual+1].style.display = "initial"
    domImgsArray[imgActual].classList.remove("acl-left")
    domImgsArray[imgActual].classList.add("acl-right")
    imgActual++
  }
}