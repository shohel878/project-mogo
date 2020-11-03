$(function(){
//  counter js
  $('.counter').counterUp({
     delay: 10,
     time: 1000
  });
//Feedback slider js
 $('.f_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  autoplaySpeed: 2000,
  nextArrow:'.lft',
  prevArrow:'.rgt',
});   
    
// venobox
    
$('.venobox').venobox(); 
    
// sticky manu
$(window).scroll(function(){
    var scrolling=$(this).scrollTop();
    if(scrolling > 300){
        $('.navbar').addClass('background');
    }
    else{
        $('.navbar').removeClass('background');
    }
});
//back to top
$('.back_top').click(function(){
    $('html,body').animate({scrollTop:0},1000);
});
$(window).scroll(function(){
    var back=$(this).scrollTop();
    if(back > 300){
        $('.back_top').fadeIn(500);
    }
    else{
        $('.back_top').fadeOut(500);
    }
});
//preloder
$(window).on('load',function(){
    $('.preloder').delay(500).fadeOut(500);
})

//yt player    
    
 jQuery("#bgndVideo").YTPlayer();   
    
    
 
    
    
})