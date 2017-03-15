/**
 * @fileoverview ESLint rules for Vestorly
 * @author Jon Dayton
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");
var resolve = require('path').resolve;

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// import all configurations in ../config
module.exports.configs = requireIndex(resolve(__dirname, '../config'));
