/**
 * @fileoverview Class does not have correct documentation
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

function includesClassDeclaration(comment) {
  return comment.value.match(/\n(\s*\*\s+|\s*)(@class)\s/);
}

function getName(name) {
  try {
    return node.declaration.callee.object.name;
  }
  catch(err) {
    return '';
  }
}

module.exports = {
  meta: {
    docs: {
      description: "Class does not have correct documentation",
      category: "documentation",
      recommended: true
    }
  },

  create: function(context) {
    var sourceCode = context.getSourceCode();

    return {
      ExportDefaultDeclaration: function(node) {
        var name = getName(node);
        if(!name) { return; }

        var comment = sourceCode.getComments(node).leading[0];
        var hasDocs = comment && isDocComment(comment) && includesClassDeclaration(comment);
        if (hasDocs) { return; }
        context.report({
          node: node,
          message: "Documentation missing for class " + name
        });
      }
    };
  }
};
