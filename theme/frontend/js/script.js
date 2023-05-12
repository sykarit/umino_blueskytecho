var GUI={};
GUI.win= $(window);
GUI.doc = $(document);
$(function(){
  GUI.init();
});

GUI._initFixedHeader = function(){
	const header = $('header.header-container');
	if(header.length > 0){
		GUI.win.on('scroll', function() {
			if($(this).scrollTop() > 10){
				header.addClass('fixed');
			}else{
				header.removeClass('fixed');
			}
		});
	}
  GUI.doc.on('click', '.btn-menu', function(event) {
    event.preventDefault();
    header.toggleClass('on');
  });
}

GUI._initMenuMobile = function(){
  const menu = $('.header .main-nav');
  const ul2 = menu.find('li>ul');
  menu.find("ul li").each(function() {
      if($(this).find("ul>li").length > 0){
          $(this).append('<i class="show fas fa-chevron-down item-center"></i>');
      }
  });
  let i2 = menu.find('.show');
  menu.on('click','.show', function(event) {
    event.preventDefault();
    let ul =  $(this).prevAll('ul');
    console.log(ul);
    if(ul.is(":hidden") === true){
      ul2.slideUp(300);
      i2.removeClass('on');
      $(this).addClass('on');
      ul.slideDown(300);
    }else{
      $(this).removeClass('on');
      ul.slideUp(300);
    }
  });
}


GUI._initOwl = function(){
  $("#owl-banner").owlCarousel({
    loop: true,
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1, 
    itemsDesktop : false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left item-center"></i>','<i class="fas fa-chevron-right item-center"></i>'],
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false

});
}


GUI.init= function (){
	GUI._initOwl();
  GUI._initMenuMobile();
  GUI._initFixedHeader();
}

