/**
 * @fileoverview Method or property does not have correct documentation
 * @author Jon Dayton
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/yuidoc-documentation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("yuidoc-documentation", rule, {

    valid: [
      {
          code: "export default Component.extend({ actions: {} })",
          parserOptions: { ecmaVersion: 6, sourceType: 'module' }
      },
      {
          code: `export default Component.extend({
            /**
             A dummy property
             @property dummy
             */

             dummy: ''
          })`,
          parserOptions: { ecmaVersion: 6, sourceType: 'module' }
      }
    ],

    invalid: [
        {
            code: "export default Component.extend({ one: '' })",
            errors: [{
                message: "Documentation missing for property, method or event one",
                type: "Property"
            }],
            parserOptions: { ecmaVersion: 6, sourceType: 'module' }
        },
        {
            code: `export default Component.extend({
              /**
               TODO: put in docs for two
               */

              two: ''
            })`,
            errors: [{
                message: "Documentation missing for property, method or event two",
                type: "Property"
            }],
            parserOptions: { ecmaVersion: 6, sourceType: 'module' }
        }
    ]
});
