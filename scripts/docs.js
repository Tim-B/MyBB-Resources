 $(document).ready(function() {
	$('.docs_subcat').hide();
	$('.docs_categories li a').click(function(event) {
		$(event.target).parent().children('.docs_subcat').toggle('fast');
}	);
});