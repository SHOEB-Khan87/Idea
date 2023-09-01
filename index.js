let dropdown = document.querySelector(".drop-down")
let list = document.querySelector(".list")
let selectedImg = document.querySelector(".selectedImg")

let anchor  = document.querySelector(".res")
let anchor1  = document.querySelector(".res1")
let anchor2  = document.querySelector(".res2")
let anchor3  = document.querySelector(".res3")
let anchor4  = document.querySelector(".res4")
let anchor5  = document.querySelector(".res5")
let anchor6  = document.querySelector(".res6")
let anchor7  = document.querySelector(".res7")
let input = document.querySelector("input")
dropdown.addEventListener("click",()=>{
    list.classList.toggle("show")
})
let nav = document.querySelector(".nav")
list.addEventListener("click",(e)=>{
selectedImg.src = e.target.src
})

let get  = document.querySelector(".menu");

get.addEventListener("click",()=>{
anchor.classList.toggle("response")
anchor1.classList.toggle("response")
anchor2.classList.toggle("response")
anchor3.classList.toggle("response")
anchor4.classList.toggle("response")
anchor5.classList.toggle("response")
anchor6.classList.toggle("response")
anchor7.classList.toggle("response")
 
input.classList.toggle("response")

console.log("hell")

  
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });