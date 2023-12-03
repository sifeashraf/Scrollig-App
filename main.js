//get the Elemnt
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let lorem = document.querySelector(".lorem");
window.onload = window.alert("use scroll bar not mouse scroll");

//function will work with every scroll
window.onscroll = function () {
  //the main scroll variable
  let value = scrollY;
  //add the the style to the Elemnt
  stars.style.left = `${value}px`;
  moon.style.top = `${value * 3}px`;
  mountains3.style.top = `${value * 2}px`;
  mountains4.style.top = `${value * 1.5}px`;
  river.style.top = `${value}px`;
  boat.style.top = `${value * 1.5}px`;
  boat.style.left = `${value * 3}px`;
  lorem.style.fontSize = `${value}px`;
  //if the the scroll higher than 67 the
  if (scrollY >= 67) {
    //will make the lorm font stuck at 67 px
    lorem.style.fontSize = 67 + "px";
    //to make the lorm stuck at same postion
    lorem.style.position = "fixed";
    //hide the lorm if the scroll higher than 511
    if (scrollY >= 511) {
      lorem.style.display = "none";
    } else {
      //else the scroll is lower than 511 the lorem will disapper
      lorem.style.display = "block";
    }
    //change the back ground if its heigher 204
    if (scrollY >= 204) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      //if its lower than 204 get every thing to normal
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
