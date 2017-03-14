/**
 * @fileoverview Method or property does not have documentation
 * @author Jon Dayton
 */
"use strict";

var emberModuleTypes = [
  'Adapter',
  'Component',
  'Controller',
  'Mixin',
  'Model',
  'Route',
  'Serializer',
  'Service'
];

function isDocComment(comment) {
  return comment.value[0] === '*';
}

function includesPropertyDeclaration(comment) {
  return comment.value.match(/\n(\s*\*\s+|\s*)(@property|@method|@event)\s/);
}

function isInEmberModule(node) {
  return emberModuleTypes.indexOf(node.parent.type) > -1;
}

var message = 'Method or property does not have documentation';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    message: message,
    schema: []
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();

    return {
      Property: function(node) {
        if (!isInEmberModule(node)) { return; }

        var comment = sourceCode.getComments(node);
        var hasDocs = comment && isDocComment(comment) && includesPropertyDeclaration(comment);
        if (hasDocs) { return; }
        context.report({
          node: node,
          message: message
        });
      }
    };
  }
};
