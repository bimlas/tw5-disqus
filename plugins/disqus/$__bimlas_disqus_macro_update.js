/*\
module-type: macro
tags: $:/tags/Macro
title: $:/bimlas/disqus/macro/update
type: application/javascript

Update Disqus counters

\*/
(function() {

	/*jslint node: true, browser: true */
	/*global $tw: false */
	"use strict";

	exports.name = "disqus-update";

	exports.params = [];

	/*
	Run the macro
	*/
	exports.run = function() {
		if(window.DISQUSWIDGETS) {
			// TODO: Developer Tools -> Network: it's fetching all counters everytime
			window.DISQUSWIDGETS.getCount({reset: true});
		}
	};

})();
