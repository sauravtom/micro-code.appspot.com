$(function(){ // document ready
 
  stick_the_element('.formcontainer')
  stick_the_element('#sticky2')

  function stick_the_element(element){ 
      var stickyTop = $(element).offset().top; // returns number 
     
      $(window).scroll(function(){ // scroll event  
     
        var windowTop = $(window).scrollTop(); // returns number
     
        if (stickyTop < windowTop) {
          $(element).css({ position: 'fixed', top: '10px' });
        }
        else {
          $(element).css('position','static');
        }
     
      });
  }    
     
});
