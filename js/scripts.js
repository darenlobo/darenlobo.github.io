var imgObj = null;
var animate ;
var size = null;
var deflt = null;
var i =0;

function init() {
   imgObj = document.getElementById('luvbutton');
   // deflt = imgObj.style.fontSize;
   imgObj.style.position= 'relative';
   imgObj.style.top = '0px';
}

function bounce() {
      imgObj.style.animation = 'boing 1s 0s 1';
      setTimeout(reset,1100);
}

function reset() {
  imgObj.style.animation =  '0s ease 0s 1 normal none running none';
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     // document.getElementById("navbar").style.padding = "0.9rem 4rem";
//     document.getElementById("navbar").style.opacity= "1";
//     document.getElementById("navbar").style.background = "var(--colBG)";
//   } else {
//     // document.getElementById("navbar").style.padding = "1.8rem 4rem";
//     document.getElementById("navbar").style.background = "none";
//     document.getElementById("navbar").style.opacity= "0";

//   }
//}

window.onload= init;

