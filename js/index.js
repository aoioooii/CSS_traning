$(function() {
	$('.DomesticMaker').on('change', function () {
        if($('#DomesticMaker :checked').length > 0) {
          $(".myModal2Footer button").prop("disabled", false);
        } else {
          $(".myModal2Footer button").prop("disabled", true);
        }
    });

    $('.myModal2Footer button').click(function() {
    	$('#myModal2 .modal2Full').html("<div class='modal-body' style='height:400px;'>次へ押された</div>");
    		
    });
});