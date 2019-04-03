/*\
title: test-filters.js
type: application/javascript
tags: [[$:/tags/test-spec]]

Plugin tests

\*/
(function(){

/*jslint node: true, browser: false */
/*global $tw: false */
"use strict";

describe("Static page generation", function() {

	require('child_process').execSync('tiddlywiki --rendertiddler $:/core/templates/static.template.html static.html text/plain');
	it("works",function() {
		expect(function() { return require("fs").lstatSync("output/static.html").isFile(); }).not.toThrow();
	});
});

})();
