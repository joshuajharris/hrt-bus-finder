var app = app || {};

	module.exports = Backbone.Collection.extend({
		url: API_URL + 'routes/active/'
	});