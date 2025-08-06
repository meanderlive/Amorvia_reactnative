module.exports = {
  rules: {
    'no-bad-image-import': {
      create: function (context) {
        return {
          ImportDeclaration(node) {
            if (/\.(png|jpe?g|gif)$/.test(node.source.value)) {
              context.report({
                node,
                message: '❌ Do not use `import` for images. Use `require(...)` instead.',
              });
            }
          },
        };
      },
    },
  },
};
