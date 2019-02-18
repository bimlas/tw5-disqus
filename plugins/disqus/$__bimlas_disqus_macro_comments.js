/*\
module-type: macro
tags: $:/tags/Macro
title: $:/bimlas/disqus/macro/comments
type: application/javascript

Display Disqus comments

\*/
(function() {

	/*jslint node: true, browser: true */
	/*global $tw: false */
	"use strict";

	exports.name = "disqus-comments";

	exports.params = [
		{"name": "current"},
	];

	/*
	Run the macro
	*/
	exports.run = function(current) {
		var d = document,s = d.createElement('script');

		/* Remove current Disqus */
		var current_disqus = document.getElementById("DISQUS-LOADER");
		if(current_disqus !== null) {
			(d.head || d.body).removeChild(current_disqus);
		}

		/* Load Disqus */
		window.disqus_config = function() {
			this.page.url = $tw.wiki.getTiddlerText('$:/config/bimlas/disqus/url') + encodeURIComponent(current);
		};
		/* TODO: Async? See counter */
		s.src = 'https://' + $tw.wiki.getTiddlerText('$:/config/bimlas/disqus/shortname') + '.disqus.com/embed.js';
		s.id = 'DISQUS-LOADER';
		s.setAttribute('data-timestamp', (new Date()).toString());
		(d.head || d.body).appendChild(s);

		return '<div id="disqus_thread"></div>'
	};

})();
