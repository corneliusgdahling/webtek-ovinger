$(document).ready(function () {



    var $form = $('#form');
    var $checkbox = $('.checkboxes');

    $form.on('submit', function(e) {
        if(!$checkbox.is(':checked')) {
            alert('Please select at least one course you are interested in.');
            e.preventDefault();
        }
    });

      $checkbox.click(function() {
      	if(!$checkbox.is(':checked')) {
    		$('#checks').css("border", "solid red");
		}
		else{
			$('#checks').css("border", "solid green");
		}
	});
  
  


});