		$(
		  function(){
			$("body").addClass("js");
			$(".menu_main").prepend("<a href='#' class='link_nav'></a>");
			
			$(".menu_main li:has(ul)").addClass("menu_parent");
			
			$(".link_nav").click(
			  function(){
				$(".menu_main > ul").toggleClass("menu_expanded");
				$(this).toggleClass("menu_parent_exp");
				return false;
			  }
			)
			$(".menu_parent").click(
			  function(){
				$(this).find(">ul").toggleClass("menu_expanded");
				$(this).toggleClass("menu_parent_exp");
				return false;
			  }
			)    
		  }
		)
 $(document).ready(function(){
    $(".first").click(function () {
		$(this).parent().parent().children('table').css("margin-left", 0);
		$(this).parent().children('.active').toggleClass('active');
		$(this).toggleClass('active');
		return false; 
    });
    $(".second").click(function () {
		$(this).parent().parent().children('table').css("margin-left", "-90%");
		$(this).parent().children('.active').toggleClass('active');
		$(this).toggleClass('active');
		return false; 
    });
    $(".third").click(function () {
		$(this).parent().parent().children('table').css("margin-left", "-180%");
		$(this).parent().children('.active').toggleClass('active');
		$(this).toggleClass('active');
		return false; 
    });
});
