/**
 * @fileoverview Method or property does not have correct documentation
 * @author Jon Dayton
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/class-documentation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("class-documentation", rule, {

    valid: [
      {
          code: `
          /**
           @class Component.MyLibrary
           */

          export default Component.extend({ one: '' })
          `
          ,
          parserOptions: { ecmaVersion: 6, sourceType: 'module' }
      }
    ],

    invalid: [
        {
            code: `
            export default Component.extend({ one: '' })
            `,
            errors: [{
                message: "Documentation missing for class Component",
                type: "ExportDefaultDeclaration"
            }],
            parserOptions: { ecmaVersion: 6, sourceType: 'module' }
        }
    ]
});
