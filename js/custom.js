
document.onreadystatechange = function () {

  if (document.readyState == 'complete') 
  {
      AOS.refresh();
  }
  }


var ele = document.getElementById('checkIcon');
ele.addEventListener('change',()=>{
  document.getElementById('mobile-navigation').style.left = 0;
});

var ele = document.getElementById('closeIcon');
ele.addEventListener('change',()=>{
  document.getElementById('mobile-navigation').style.left = -100+'%';
});

var drop_ele = document.getElementById('mobile-drop');
drop_ele.addEventListener('click', ()=>{
  var drop_list = document.getElementById('drop-down-list');
  if(drop_list.style.display === 'none'){
    drop_list.style.display = 'block';
  }
  else{
    drop_list.style.display = 'none';
  }
});

window.onscroll = function() {stickNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// function showDropDown(){
//   var drop_down = document.getElementById('drop-down-list');
//   if (drop_down.style.display === 'none'){
//     drop_down.style.display = 'block';
//   }
//   else if(drop_down.style.display === 'block'){
//     drop_down.style.display = 'none';
//   }
// }

//Slider container
var sliderSection = document.getElementById('slider-section');

//inner slider section
var sliderImages = document.getElementsByClassName('slider-image');

//Buttons
var prviousBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

var counter = 1;
const size = sliderImages[0].clientWidth;


sliderSection.style.transform = 'translateX('+(-(sliderImages[0].clientWidth) * counter) + 'px)';

//Button Listeners


nextBtn.addEventListener('click', ()=>{

  if(counter >= sliderImages.length -1 ) return;

  sliderSection.style.transition = "transform 0.4s ease-in-out";
  counter++;
  sliderSection.style.transform = 'translateX('+(-(sliderImages[0].clientWidth) * counter) + 'px)';
});

prviousBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;

  sliderSection.style.transition = "transform 0.4s ease-in-out";
  counter--;
  sliderSection.style.transform = 'translateX('+(-(sliderImages[0].clientWidth) * counter) + 'px)';
});

sliderSection.addEventListener('transitionend', ()=>{
  if(sliderImages[counter].id === 'last-clone'){
    sliderSection.style.transition = 'none';
    counter = sliderImages.length - 2;
    sliderSection.style.transform = 'translateX('+(-(sliderImages[0].clientWidth) * counter) + 'px)';
  }
  if(sliderImages[counter].id === 'first-clone'){
    sliderSection.style.transition = 'none';
    counter = sliderImages.length - counter;
    sliderSection.style.transform = 'translateX('+(-(sliderImages[0].clientWidth) * counter) + 'px)';
  }
})