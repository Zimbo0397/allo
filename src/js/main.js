$(document).on('ready', function() {
	$('.dropdown-holder').on('click', function (e) {
		// console.log(e.target);
		if ($(e.target).parent().hasClass('round-button')) {
			$(this).toggleClass('active');
		};
	});
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
});