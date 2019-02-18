/*\
module-type: macro
tags: $:/tags/Macro
title: $:/bimlas/disqus/macro/counter
type: application/javascript

Display Disqus comments counter

\*/
(function() {

	/*jslint node: true, browser: true */
	/*global $tw: false */
	"use strict";

	exports.name = "disqus-counter";

	exports.params = [
		{"name": "current"},
	];

	/*
	Run the macro
	*/
	exports.run = function(current) {
		var d = document,s = d.createElement('script');

		var current_counter = document.getElementById("dsq-count-scr");
		if(current_counter === null) {
			s.src = 'https://' + $tw.wiki.getTiddlerText('$:/config/bimlas/disqus/shortname') + '.disqus.com/count.js';
			s.id = 'dsq-count-scr';
			s.setAttribute('async','');
			d.body.appendChild(s);
		}
		return '(<span class="disqus-comment-count" data-disqus-url="' + $tw.wiki.getTiddlerText('$:/config/bimlas/disqus/url') + encodeURIComponent(current) + '">' + $tw.wiki.getTiddlerText('$:/config/bimlas/disqus/counter-default') + '</span>)';
	};

})();
