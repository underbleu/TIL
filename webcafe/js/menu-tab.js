$(document).ready(function() {
  var menu = $('.main-menu > li');
  var span = $('.main-menu span');
  var last_item = $('.sub-menu li:last-child a');

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('sub-menu-active');
  });
  span.focusin(function() {
    $(this).siblings('.sub-menu').addClass('sub-menu-active');
  });
  last_item.focusout(function() {
    $(this).parents('.sub-menu').removeClass('sub-menu-active');
  });
  //  notice-heading, .pds-heading를 .tab클래스로 새로 묶어주자.
  var tab = $('.tab');

  // tab.click(function() {
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });
  // tab.focusin(function() {                                    
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });

  // 두 코드를 한번에 묶는 최근의 속성 on
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active').siblings().removeClass('board-active')
  });
});


// $(document).ready(function() {
//   var menu = $('.main-menu > li');

//   menu.hover(function() {
//     $(this).find('.sub-menu').toggleClass('sub-menu-active');
//   });

// });