let one = document.querySelector("#body")
let two = document.querySelector("#body2")
let tree = document.querySelector("#bory")
let four = document.querySelector("#Goals")
let five = document.querySelector("#space")
let last = document.querySelector("#last")
// window.addEventListener("scroll", console.log(window.pageYOffset))
function show(){
if(window.pageYOffset>110){
two.style.cssText="position:relative; left:0; opacity:1; transition:3000ms;"
}
else{
   two.style.cssText="position:relative; left:50rem; opacity:0; transition:1000ms;" 
}
}


function showa(){
    if(window.pageYOffset>740){
tree.style.cssText="position:relative; left:0;opacity:1; transition:3000ms;"
    }
    else{
        tree.style.cssText="position:relative; left:50rem;opacity:0; transition:1000ms;" 
    }
}
function showb(){
    if(window.pageYOffset>1400){
four.style.cssText="position:relative; left:0;opacity:1; transition:3000ms;"
    }
    else{
        four.style.cssText="position:relative; left:50rem;opacity:0; transition:1000ms;" 
    }
}

window.addEventListener("scroll", show)
window.addEventListener("scroll",  showa)
window.addEventListener("scroll",  showb)


$(document).ready(function ray(){
// $("#terms").click(function(){
    $("#terms").fadeIn(1000).slideUp(2000).slideDown(2000).slideUp(2000).slideDown(2000).slideUp(2000).slideDown(2000)

// })




}
)

// showa()