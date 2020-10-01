
var app = new Reef('#callus');

// Your template can be a string
var app = new Reef('#callus', {
	template: 	'<div class="text-center">' +
				'<h4><small>Call us for a free needs analysis.</small></h4>' +
				'<h3>We Make Security Easy</h3>' + 
				'<h2>Tel-Tec Security Systems</h2>' +
				'<p>Protecting people and their assets since 1982</p>' +
				'</div>'
});

app.render();
