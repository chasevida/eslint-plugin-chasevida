/**
 * @fileoverview A variation of the ESLint space-in-parens rule that adds additional exceptions"
 * @author Mark Coleman
 * @copyright 2015 Mark Coleman. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var path = require('path');
var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, "rules"));



// import processors
module.exports.processors = {

    // add your processors here
};
