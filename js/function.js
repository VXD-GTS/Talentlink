// JavaScript Document
$(document).ready(function () {
	"use strict";
	$('[data-toggle="offcanvas"]').click(function () {
		$('.row-offcanvas').toggleClass('active');
	});

});
/*----------------------------------------------------------------*/
$(function () {
	"use strict";
	$('[data-toggle="tooltip"]').tooltip();
});
/*----------------------------------------------------------------*/
$(document).ready(function(){	
	"use strict";
	$("#year").html(new Date().getFullYear());
});

/*----------------------------------------------------------------*/
$(document).ready(function(){	
	$('.people-tile').on('click', function(e) {
	 if (e.target !== this)
		return;
location.href ="profile.html";
	  //alert( 'clicked the foobar' );
	});
});

/*----------------------------------------------------------------*/
$(document).ready(function(){	
	$(".toggle-accordion").on("click", function() {
	var accordionId = $(this).attr("accordion-id"),
	  numPanelOpen = $(accordionId + ' .collapse.in').length;
	$(this).toggleClass("active");
	if (numPanelOpen == 0) {
	  openAllPanels(accordionId);
	} else {
	  closeAllPanels(accordionId);
	}
	})
	openAllPanels = function(aId) {
	console.log("setAllPanelOpen");
	$(aId + ' .panel-collapse:not(".in")'+'> .panel-body').removeClass('ellipsis');
	$(aId + ' .panel-collapse:not(".in")').collapse('show');
	}
	closeAllPanels = function(aId) {
	console.log("setAllPanelclose");
	$(aId + ' .panel-collapse.in').collapse('hide');
	$(aId + ' .panel-collapse:not(".in")'+'> .panel-body').addClass('ellipsis');
	}
  });
