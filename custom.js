$(document).ready(function() {
	var url = 'https://hn.algolia.com/api/v1/search?query=javascript';

	$.getJSON(url, function(data) {

		var currentQuote = '';
		var quotes = data.hits;

		$('.read').on('click', function() {
			currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

			$('.quoteBody').hide();
			$('.quoteBodyLink').html(currentQuote.title).attr('href', currentQuote.url).attr('target', '_blank');
			$('.quoteAuthor').html(currentQuote.author);

			$('.tweetQuote')
			.attr('href', 'http://twitter.com/intent/tweet?text=' + currentQuote.title + ' - ' + currentQuote.author)
			.attr('target', '_blank')
			.attr('disabled', false);

			$('.read').html('Show Me More');
		});		
	});
});