require('./main.css');
var Vue = require('vue');
var app = new Vue({
	el: '#app',
	data: {
		view: "page-a"
	},
	components: {
		'page-a': function(resolve) {
			require(['./views/a'], resolve);
		},
		'page-b': function(resolve) {
			require(['./views/b'], resolve);
		}
	}
});

function route() {
	app.view = window.location.hash.slice(1) || "page-a";
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);