/*global $, window, document*/

//hide navbar on scroll

var zero = 0;

$(document).ready(function () {
    
    'use strict';
    
    $(window).on('scroll', function () {
        
        $('.nav-bar').toggleClass('hide', $(window).scrollTop() > zero);
        
        zero = $(window).scrollTop();
        
    });
    
});



 //add active class to links
  
    $(document).scroll(function () {
        
    "use strict";
    
    $('.nav-bar').toggleClass('active', $(this).scrollTop() > $('.nav-bar').height());
        
    });














    