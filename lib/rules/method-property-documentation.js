/**
 * @fileoverview Method or property does not have correct documentation
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
  try {
    return emberModuleTypes.indexOf(node.parent.parent.callee.object.name) > -1;
  }
  catch(err) {
    return false
  }
}

module.exports = {
  meta: {
    docs: {
      description: "Method or property does not have correct documentation",
      category: "documentation",
      recommended: true
    }
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();

    return {
      Property: function(node) {
        var name = node.key.name;

        if (!isInEmberModule(node) || name === 'actions') { return; }

        var comment = sourceCode.getComments(node).leading[0];
        var hasDocs = comment && isDocComment(comment) && includesPropertyDeclaration(comment);
        if (hasDocs) { return; }

        context.report({
          node: node,
          message: "Documentation missing for property or method " + name
        });
      }
    };
  }
};
