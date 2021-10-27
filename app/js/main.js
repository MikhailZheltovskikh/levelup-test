$('.reviews__slider').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   focusOnSelect: true,
   arrows: false,
   vertical: true,
   verticalSwiping: true,

});

$("#phone").mask("+7 (999) 999-9999");



function getTimeRemaining(endtime) {
   var t = Date.parse(endtime) - Date.parse(new Date());
   var seconds = Math.floor((t / 1000) % 60);
   var minutes = Math.floor((t / 1000 / 60) % 60);
   return {
     total: t,
     minutes: minutes,
     seconds: seconds
   };
 }
 
 function initializeClock(id, endtime) {
   var clock = document.getElementById(id);
   var minutesSpan = clock.querySelector(".minutes");
   var secondsSpan = clock.querySelector(".seconds");
 
   function updateClock() {
     var t = getTimeRemaining(endtime);
 
     if (t.total <= 0) {
       clearInterval(timeinterval);
       var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
       initializeClock('countdown', deadline);
     }
 

     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
   }
 
   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
 }
 
 var deadline = new Date(Date.parse(new Date()) + 1800 * 1000);
 initializeClock("countdown", deadline);