
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

////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Slider code ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

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



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Testimonial Slider code ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:['<i id="testprevBtn" class="fa fa-angle-left"></i>','<i id="testnextBtn" class="fa fa-angle-right"></i>'],
  dots:false,
  autoplay:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:true
          
      },
      1000:{
          items:3,
          nav:true
         
    
      }
  }
})


/** 
//Slider container
var sliderSectionTest = document.getElementById('test-slider-section');

//inner slider section
var sliderImagesTest = document.getElementsByClassName('testimonial-block');

//Buttons
var testprviousBtn = document.getElementById('testprevBtn');
var testnextBtn = document.getElementById('testnextBtn');

var counterTest = 1;
var sizeTest = sliderImagesTest[0].clientWidth;

sizeTest += 48;
console.log(sizeTest);




//sliderSectionTest.style.transform = 'translateX('+(-(sliderImagesTest[0].clientWidth) * counterTest) + 'px)';

//Button Listeners


testnextBtn.addEventListener('click', ()=>{

  if(counterTest >= sliderImagesTest.length -1 ) return;

  sliderSectionTest.style.transition = "transform 0.4s ease-in-out";
 
  sliderSectionTest.style.transform = 'translateX('+(-(sizeTest) * counterTest) + 'px)';
  counterTest++;
  //sliderSectionTest.style.transform = 'translateX('+(-(sliderImagesTest[0].clientWidth) * counterTest) + 'px)';
  
});

testprviousBtn.addEventListener('click', ()=>{
  if(counterTest <= 0) return;

  sliderSectionTest.style.transition = "transform 0.4s ease-in-out";
  counterTest--;
  sliderSectionTest.style.transform = 'translateX('+(-(sizeTest) * counterTest)   + 'px)';
  
  
});

sliderSectionTest.addEventListener('transitionend', ()=>{
  if(sliderImagesTest[counterTest].id === 'last-clone'){
    sliderSectionTest.style.transition = 'none';
    counterTest = sliderImagesTest.length - 2;
    sliderSectionTest.style.transform = 'translateX('+ (-(sizeTest) * counterTest) + 'px)';
  }
  if(sliderImagesTest[counterTest+1].id === 'first-clone' ){
    sliderSectionTest.style.transition = 'none';

    /**   if ( sliderImagesTest[counterTest+1].id === 'first-clone')
      counterTest = sliderImagesTest.length - (counterTest +1); 
    else  */
    /*    counterTest = sliderImagesTest.length - (counterTest+2);
    sliderSectionTest.style.transform = 'translateX('+((sizeTest) * counterTest) + 'px)';
  }
})

*/

