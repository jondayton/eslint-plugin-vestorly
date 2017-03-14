/**
 * @fileoverview Method or property does not have documentation
 * @author Jon Dayton
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/method-property-documentation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("method-property-documentation", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "{ prop: '' }",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
