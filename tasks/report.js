/*
 * grunt-kahvesi
 * https://github.com/tonylukasavage/grunt-kahvesi
 *
 * Copyright (c) 2015 Tony Lukasavage
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec,
	format = require('util').format,
	path = require('path');

var BIN = path.join(__dirname, '..', 'node_modules', '.bin');

module.exports = function(grunt) {

	// compose our various coverage reports into one html report
	grunt.registerTask('report', function() {
		var done = this.async();
		var istanbul = quote(BIN + '/istanbul');
		var cmd = format('%s report lcov', istanbul);

		grunt.log.debug(cmd);

		exec(cmd, function(err, stdout, stderr) {
			if (err) { grunt.fail.fatal(err); }
			grunt.log.ok('Composite test coverage report generated');
			return done();
		});
	});
};

function quote(str) { return '"' + str + '"'; }