/**
 * General Gulp setup
 */

'use strict';


// Plugins & Setup
// -------------------------------

var project = require('./package.json'),
    gulp = require('gulp'),
    header = require('gulp-header'),
    regxreplace = require('gulp-replace'),
    concat = require('gulp-concat');

// Handle Windows paths
var processWinPath = function(file) {
    var path = require('path');

    if (process.platform === 'win32') {
        file.path = path.relative('.', file.path);
        file.path = file.path.replace(/\\/g, '/');
    }
};


// Handle error's quietly
var errorHandler = function(error) {
    console.log(error.toString());
    this.emit('end');
};

// Plugin options
var options = {};

options.header = {
    pkg: project,
    year: (function() { return new Date().getFullYear(); })(),
    now: (function() { return new Date().toUTCString(); })()
};

options.scsslint = {
    config: '.scss-lint.yml',
    verbose: false
};

// Project banner/header
var banner = ['// !!GENERATED FILE DO NOT EDIT!!',
  '/**',
  ' *! <%= pkg.title %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>' + ' Copyright (C) <%= year %> <%= pkg.company %>',
  ' * Last updated on <%= now %>',
  ' */',
  ''].join('\n');



// Tasks
// -------------------------------

// Create default settings file
gulp.task('create-settings', function() {
    return gulp.src([
        './src/var/_helpers.scss',
        './src/var/_colors.scss',
        './src/var/_typography.scss',
        './src/var/_layout.scss',
        './src/var/_animation.scss',
        './src/var/_base.scss',
        './src/var/_borders.scss',
        './src/var/_buttons.scss',
        './src/var/_forms.scss',
        './src/var/_lists.scss',
        './src/var/_media.scss',
        './src/var/_tables.scss'
        ])
    .pipe(concat('_default-settings.scss', {newLine: '\r\n'}))
    .pipe(header(banner, options.header))
    .pipe(regxreplace(/\s\!default/g, ''))
    .pipe(gulp.dest('./src/'));
});
