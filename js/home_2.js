function sleep(ms) {
  return new Promise(function(resolve) { 
    setTimeout(function() { 
      resolve()
    }, ms)
})
}

window.onload = function() {
  $('.wrap').addClass('is-show');
  $(".js-loading").delay(500).fadeOut(500,function(){
    $(this).remove();
  });
};


$(function(){

//動画再生（中ページTRAILERボタン）
$(document).ready(function(){
  $('.js-trailer').modaal({type: 'iframe',overlay_opacity: '1.0',fullscreen: 'true'});
});

$(document).ready(function(){
  $('.topMovie').modaal({type: 'video',width: 1280,height: 720,start_open: false,background: '#000',overlay_opacity: '0.8'});
});


$('.js-hover').easyRollover({
	suffix: '_off.',
	suffix_replace: '_on.'
});


//ナビゲーション開閉
$('.js-gnav').on('click', function() {
  $('.homeNav2').toggleClass('is-show');
  $('.navClose a').toggleClass('is-show');
});



$('a[href^="#"]').on('click',function(){
 var speed = 700;
 var href= $(this).attr("href");
 var target = $(href === "#" || href === "" ? 'html' : href);
 var position = (target.offset().top);
 $('body,html').animate({scrollTop:position}, speed, 'swing');
 return false;
});


/*----  scroll top  -------*/

var topBtn = $('.pagetop');  
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});

  
}); // $(function() end

//ムビチケ開閉
$('#mvck_online').on('click', function() {
  $('#mvckAll').toggleClass('is-show');
});

//ムビチケCLOSEボタン
$('#mvckClose').on('click', function(event) {
    $('#mvckAll').removeClass('is-show');
});
