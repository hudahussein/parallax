/*global $, document*/


 //add active class to links
  
    $(document).scroll(function () {
        
    "use strict";
    
    $('.nav-bar').toggleClass('active', $(this).scrollTop() > $('.nav-bar').height());
        
    });














    