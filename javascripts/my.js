$( document ).ready(function() {
	    $("#naturmort").addClass('selected');
		$("#arh_zak_tab").hide();
	    $("#pejzazh_tab").hide();
	$("#naturmort").click(function(){
	    $("#arh_zak_tab").hide();
	    $("#pejzazh_tab").hide();
	    $("#naturmort").addClass('selected');
	    $("#naturmort_tab").show();
		
		// $(".arh_zak").removeClass('selected');
		$("#arh_zak").removeClass('selected');
	    $("#pejzazh").removeClass('selected');
	});
		$("#arh_zak").click(function(){
	    $("#naturmort_tab").hide();
	    $("#pejzazh_tab").hide();
	    $("#arh_zak").addClass('selected');
	    $("#arh_zak_tab").show();
		
		// $(".arh_zak").removeClass('selected');
		$("#naturmort").removeClass('selected');
	    $("#pejzazh").removeClass('selected');
	});
		$("#pejzazh").click(function(){
	    $("#naturmort_tab").hide();
	    $("#arh_zak_tab").hide();
	    $("#pejzazh").addClass('selected');
	    $("#pejzazh_tab").show();
		
		// $(".arh_zak").removeClass('selected');
		$("#naturmort").removeClass('selected');
	    $("#arh_zak").removeClass('selected');
	});
});

