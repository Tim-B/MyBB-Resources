$(function() {
	$('.docs_subcat').hide();
	$('.docs_categories li a').on('click', function(event) {
		$(event.target).parent().children('.docs_subcat').toggle('fast');
	});

	$('pre').addClass('prettyprint');
	prettyPrint();
});